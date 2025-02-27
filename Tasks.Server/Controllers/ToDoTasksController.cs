using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Tasks.Server.Data;
using Tasks.Server.Models;

namespace Tasks.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ToDoTasksController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public ToDoTasksController(ApplicationDbContext context)
        {
            _context = context;
        }
        // 1. GET: api/ToDoTask
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ToDoTask>>> GetToDoTasks()
        {
            return await _context.ToDoTasks.ToListAsync();
        }

        // 2. GET: api/ToDoTask/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ToDoTask>> GetToDoTask(int id)
        {
            var task = await _context.ToDoTasks.FindAsync(id);

            if (task == null)
            {
                return NotFound();
            }

            return task;
        }

        // 3. POST: api/ToDoTask
        [HttpPost]
        public async Task<ActionResult<ToDoTask>> PostToDoTask(ToDoTask task)
        {
            _context.ToDoTasks.Add(task);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetToDoTask), new { id = task.Id }, task);
        }

        // 4. PUT: api/ToDoTask/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutToDoTask(int id, ToDoTask task)
        {
            if (id != task.Id)
            {
                return BadRequest();
            }

            _context.Entry(task).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ToDoTaskExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // 5. DELETE: api/ToDoTask/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteToDoTask(int id)
        {
            var task = await _context.ToDoTasks.FindAsync(id);
            if (task == null)
            {
                return NotFound();
            }

            _context.ToDoTasks.Remove(task);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ToDoTaskExists(int id)
        {
            return _context.ToDoTasks.Any(e => e.Id == id);
        }
    }
}