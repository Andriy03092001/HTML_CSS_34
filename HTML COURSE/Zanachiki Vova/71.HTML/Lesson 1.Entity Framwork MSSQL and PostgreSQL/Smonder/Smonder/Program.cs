using Smonder.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Smonder
{
    class Program
    {
        static void Main(string[] args)
        {
            byte action = 0;
            using (EFContext context = new EFContext())
            {
                do
                {
                    Console.WriteLine("0.Вихід");
                    Console.WriteLine("1.Додати роль");
                    Console.WriteLine("2.Показати список ролей");
                    Console.WriteLine("3.Видалити по Id");
                    Console.WriteLine("4.Редагувати по Id");
                    Console.Write("->_");
                    action = byte.Parse(Console.ReadLine());
                    switch (action)
                    {
                        case 1:
                            {
                                Role role = new Role();
                                Console.WriteLine("Роль користувача: ");
                                role.Name = Console.ReadLine();
                                Console.WriteLine("Опис ролі користувача: ");
                                role.Desctiption = Console.ReadLine();
                                context.Roles.Add(role);
                                context.SaveChanges();
                                break;
                            }
                        case 2:
                            {
                                foreach(var role in context.Roles.ToList())
                                {
                                    Console.WriteLine($"{role.Id}. {role.Name} - \"{role.Desctiption}\" ");
                                }
                                break;
                            }
                        case 3:
                            {
                                Console.WriteLine("Id ролі користувача: ");
                                int id = int.Parse(Console.ReadLine());
                                var role=context.Roles.SingleOrDefault(r => r.Id == id);
                                if(role!=null)
                                {
                                    context.Roles.Remove(role);
                                    context.SaveChanges();
                                }
                                break;
                            }
                        case 4:
                            {
                                Console.WriteLine("Id ролі користувача: ");
                                int id = int.Parse(Console.ReadLine());
                                var role = context.Roles.SingleOrDefault(r => r.Id == id);
                                if (role != null)
                                {
                                    Console.WriteLine("Роль користувача: ");
                                    role.Name = Console.ReadLine();
                                    Console.WriteLine("Опис ролі користувача: ");
                                    role.Desctiption = Console.ReadLine();
                                    context.SaveChanges();
                                }
                                break;
                            }
                    }
                }
                while (action != 0);
            }
        }
    }
}
