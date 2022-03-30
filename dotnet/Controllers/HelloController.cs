#nullable disable
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using classroom;

namespace classroom.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HelloController : ControllerBase
    {
        private readonly HelloContext _context;

        public HelloController(HelloContext context)
        {
            _context = context;
        }

        // GET: api/Hello
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Hello>>> GetHellos()
        {
            return await _context.Hellos.ToListAsync();
        }

        // GET: api/Hello/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Hello>> GetHello(int id)
        {
            var hello = await _context.Hellos.FindAsync(id);

            if (hello == null)
            {
                return NotFound();
            }

            return hello;
        }

        // PUT: api/Hello/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutHello(int id, Hello hello)
        {
            if (id != hello.Id)
            {
                return BadRequest();
            }

            _context.Entry(hello).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!HelloExists(id))
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

        // POST: api/Hello
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Hello>> PostHello(Hello hello)
        {
            _context.Hellos.Add(hello);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetHello", new { id = hello.Id }, hello);
        }

        // DELETE: api/Hello/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteHello(int id)
        {
            var hello = await _context.Hellos.FindAsync(id);
            if (hello == null)
            {
                return NotFound();
            }

            _context.Hellos.Remove(hello);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool HelloExists(int id)
        {
            return _context.Hellos.Any(e => e.Id == id);
        }
    }
}
