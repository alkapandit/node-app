import "dotenv/config";
import app from "./app";
import prisma from "./common/config/prisma";

const PORT = process.env.PORT;

// Server start
const startServer = async () => {
  try {
    // Optional: simple Prisma health check
    await prisma.$connect();
    console.log("✅ Database Connected (Prisma)");

    // // Example DB operation (remove later if not needed)
    // const user = await prisma.user.create({
    //   data: {
    //     email: "pankajbarman000@gmail.com",
    //     name: "Pankaj Barman",
    //   },
    // });

    // console.log("👤 User created:", user);

    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("❌ Server startup failed", error);
    process.exit(1);
  }
};

startServer();
