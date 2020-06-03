namespace WebApiSite.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class BeginaddtabletblUsers : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.tblUsers",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(nullable: false, maxLength: 255),
                        Image = c.String(maxLength: 255),
                        Email = c.String(nullable: false, maxLength: 255),
                    })
                .PrimaryKey(t => t.Id);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.tblUsers");
        }
    }
}
