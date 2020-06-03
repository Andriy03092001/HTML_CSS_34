namespace Smonder.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddtblRoles : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.tblRoles",
                c => new
                    {
                        Id = c.Long(nullable: false, identity: true),
                        Name = c.String(nullable: false, maxLength: 255),
                        Desctiption = c.String(maxLength: 1000),
                    })
                .PrimaryKey(t => t.Id);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.tblRoles");
        }
    }
}
