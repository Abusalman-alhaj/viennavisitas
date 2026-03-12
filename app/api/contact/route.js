import { NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";
import connectDB from "@/lib/mongodb";
import ContactMessage from "@/lib/models/ContactMessage";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, project_type, message } = body;

    // Validate
    if (!name || name.length < 2 || name.length > 100) {
      return NextResponse.json({ detail: "Invalid name" }, { status: 422 });
    }
    if (!email || !email.includes("@")) {
      return NextResponse.json({ detail: "Invalid email" }, { status: 422 });
    }
    if (!project_type || project_type.length < 2 || project_type.length > 120) {
      return NextResponse.json({ detail: "Invalid project type" }, { status: 422 });
    }
    if (!message || message.length < 10 || message.length > 2000) {
      return NextResponse.json({ detail: "Invalid message" }, { status: 422 });
    }

    await connectDB();

    const newMessage = {
      id: uuidv4(),
      name,
      email,
      project_type,
      message,
      created_at: new Date(),
    };

    await ContactMessage.create(newMessage);

    console.log(`New contact inquiry saved for ${email}`);
    return NextResponse.json(newMessage, { status: 200 });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ detail: "Unable to save contact request" }, { status: 500 });
  }
}

export async function GET() {
  try {
    await connectDB();
    const messages = await ContactMessage.find({}, { _id: 0 })
      .sort({ created_at: -1 })
      .limit(200)
      .lean();
    return NextResponse.json(messages);
  } catch (error) {
    console.error("Get contact messages error:", error);
    return NextResponse.json({ detail: "Unable to fetch messages" }, { status: 500 });
  }
}
