export async function GET() {
    const res = await fetch('https://radio.hellapunk.com/stats?json=1', {
        next: { revalidate: 10 },
    });
    const data = await res.json();

    return Response.json({
        song: data,
    });
}