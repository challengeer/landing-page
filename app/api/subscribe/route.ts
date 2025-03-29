import { NextResponse } from 'next/server';
import mysql from 'mysql2/promise';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

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

    // Insert email into database
    await connection.execute(
      'INSERT INTO subscribers (email, created_at) VALUES (?, NOW())',
      [email]
    );

    await connection.end();

    return NextResponse.json({ message: 'Subscribed successfully' }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to subscribe' },
      { status: 500 }
    );
  }
} 