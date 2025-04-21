import { NextResponse } from 'next/server';
import mysql from 'mysql2/promise';

export async function POST(request: Request) {
  try {
    const { email, language } = await request.json();

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Create MySQL connection
    const connection = await mysql.createConnection({
      host: process.env.MYSQL_HOST,
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE,
    });

    // Check if email already exists
    const [existingEmails] = await connection.execute(
      'SELECT email FROM subscribers WHERE email = ?',
      [email]
    );

    if (Array.isArray(existingEmails) && existingEmails.length > 0) {
      // Update language for existing subscriber
      await connection.execute(
        'UPDATE subscribers SET language = ? WHERE email = ?',
        [language, email]
      );
      await connection.end();
      return NextResponse.json(
        { message: 'Language preference updated' },
        { status: 200 }
      );
    }

    // Insert email into database
    await connection.execute(
      'INSERT INTO subscribers (email, language, created_at) VALUES (?, ?, NOW())',
      [email, language]
    );

    await connection.end();

    return NextResponse.json({ message: 'Subscribed successfully' }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: 'Failed to subscribe' },
      { status: 500 }
    );
  }
} 