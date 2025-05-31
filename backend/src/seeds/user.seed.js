import { config } from "dotenv";
import { connectDB } from "../lib/db.js";
import User from "../models/user.model.js";

config();

const seedUsers = [
  // North Indian Female Users
  {
    email: "priya.sharma@example.com",
    fullName: "Priya Sharma",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/11.jpg",
  },
  {
    email: "ananya.singh@example.com",
    fullName: "Ananya Singh",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/12.jpg",
  },
  {
    email: "isha.verma@example.com",
    fullName: "Isha Verma",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/13.jpg",
  },
  {
    email: "kritika.yadav@example.com",
    fullName: "Kritika Yadav",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/14.jpg",
  },
  {
    email: "neha.bansal@example.com",
    fullName: "Neha Bansal",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/15.jpg",
  },
  {
    email: "ruchi.mehra@example.com",
    fullName: "Ruchi Mehra",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/16.jpg",
  },
  {
    email: "swati.saxena@example.com",
    fullName: "Swati Saxena",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/17.jpg",
  },
  {
    email: "tanvi.agarwal@example.com",
    fullName: "Tanvi Agarwal",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/18.jpg",
  },
  {
    email: "sonal.jain@example.com",
    fullName: "Sonal Jain",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/19.jpg",
  },
  {
    email: "megha.khanna@example.com",
    fullName: "Megha Khanna",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/20.jpg",
  },

  // North Indian Male Users
  {
    email: "rahul.kumar@example.com",
    fullName: "Rahul Kumar",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/11.jpg",
  },
  {
    email: "amit.sharma@example.com",
    fullName: "Amit Sharma",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/12.jpg",
  },
  {
    email: "rohit.verma@example.com",
    fullName: "Rohit Verma",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/13.jpg",
  },
  {
    email: "deepak.singh@example.com",
    fullName: "Deepak Singh",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/14.jpg",
  },
  {
    email: "manish.yadav@example.com",
    fullName: "Manish Yadav",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/15.jpg",
  },

  // Andhra & Telangana Users (Mixed Gender)
  {
    email: "sree.lakshmi@example.com",
    fullName: "Sree Lakshmi",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/21.jpg",
  },
  {
    email: "naga.raju@example.com",
    fullName: "Naga Raju",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/21.jpg",
  },
  {
    email: "keerthi.reddy@example.com",
    fullName: "Keerthi Reddy",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/22.jpg",
  },
  {
    email: "mahesh.babu@example.com",
    fullName: "Mahesh Babu",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/22.jpg",
  },
  {
    email: "swathi.reddy@example.com",
    fullName: "Swathi Reddy",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/23.jpg",
  },
  {
    email: "venkatesh.kumar@example.com",
    fullName: "Venkatesh Kumar",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/23.jpg",
  },
  {
    email: "anusha.naidu@example.com",
    fullName: "Anusha Naidu",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/24.jpg",
  },
  {
    email: "ravi.teja@example.com",
    fullName: "Ravi Teja",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/24.jpg",
  },
  {
    email: "divya.kiran@example.com",
    fullName: "Divya Kiran",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/25.jpg",
  },
  {
    email: "karthik.chowdary@example.com",
    fullName: "Karthik Chowdary",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/25.jpg",
  },
  {
    email: "mounika.r@example.com",
    fullName: "Mounika R",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/26.jpg",
  },
  {
    email: "sandeep.goud@example.com",
    fullName: "Sandeep Goud",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/26.jpg",
  },
  {
    email: "usha.devalla@example.com",
    fullName: "Usha Devalla",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/27.jpg",
  },
  {
    email: "rajasekhar.m@example.com",
    fullName: "Rajasekhar M",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/27.jpg",
  },
  {
    email: "lavanya.s@example.com",
    fullName: "Lavanya S",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/28.jpg",
  },
];

const seedDatabase = async () => {
  try {
    await connectDB();

    await User.insertMany(seedUsers);
    console.log("Database seeded successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
};

// Call the function
seedDatabase();
