const{ PrismaClient } = require("@prisma/client");

const database = new PrismaClient ();

async function main() {
    try {
        await database.category.createMany({
            data: [
                { name: "test1" },
                { name: "test2" },
                { name: "test3" },
                { name: "test4" },
                { name: "test5" },
                
            ]
        });

      console.log("success");  
    } catch (error) {
        console.log("Error seeding the databse categories", error);
    } finally {
        await database.$disconnect();
    }
}

main();