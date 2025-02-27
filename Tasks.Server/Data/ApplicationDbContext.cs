using Microsoft.EntityFrameworkCore;
using Tasks.Server.Models;

namespace Tasks.Server.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
          : base(options)
        {
        }

        public DbSet<ToDoTask> ToDoTasks { get; set; }
    }
}
