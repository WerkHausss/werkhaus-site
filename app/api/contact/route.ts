import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    // ✅ Get form data
    const { name, email, company, projectType, details } = await req.json();

    // 🛑 Validation
    if (!name || !email || !projectType || !details) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    console.log("🔥 New Lead Received:", {
      name,
      email,
      company,
      projectType,
      details,
    });

    // 🚨 Check API key exists
    if (!process.env.RESEND_API_KEY) {
      console.error("❌ Missing RESEND_API_KEY");
      return NextResponse.json(
        { error: "Server misconfiguration" },
        { status: 500 }
      );
    }

    // 📩 Send email via Resend
    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Werkhaus <info@werkhausagency.com>",
        to: ["info@werkhausagency.com", "arlo.beautyco@gmail.com"],
        subject: `🔥 New Lead: ${projectType}`,
        html: `
          <div style="font-family: Arial, sans-serif; padding: 20px;">
            <h2 style="color:#ff5a00;">New Werkhaus Lead</h2>
            
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Company:</strong> ${company || "N/A"}</p>
            <p><strong>Project Type:</strong> ${projectType}</p>

            <hr style="margin: 20px 0;" />

            <p><strong>Project Details:</strong></p>
            <p>${details}</p>

            <br/>
            <small>Submitted at: ${new Date().toLocaleString()}</small>
          </div>
        `,
      }),
    });

    // ❌ Handle Resend error
    if (!resendResponse.ok) {
      const errorText = await resendResponse.text();
      console.error("❌ Resend Error:", errorText);

      return NextResponse.json(
        { error: "Email failed to send" },
        { status: 500 }
      );
    }

    console.log("✅ Email sent successfully");

    // ✅ Success response
    return NextResponse.json({
      success: true,
      message: "Email sent successfully",
    });

  } catch (error) {
    console.error("❌ Server Error:", error);

    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
}