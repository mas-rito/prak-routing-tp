import http, {Server} from "http";

const server = http.createServer((req, res) => {
    const url = req.url || '/';
    const method = req.method || 'GET';
    console.log(`[${new Date().toLocaleTimeString()}] ${method} ${url}`);
    
    // Rute: GET /
    if (url === '/' && method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({massage: "Selamat datang"}));
    }
    // Rute: GET /about
    else if (url === '/about' && method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({massage: "Ini adalah halaman about"}));
    }
    // Rute: GET /api/users (mengembalikan data JSON)
    else if (url === '/api/users' && method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify([
        { id: 1, name: 'Alice' },
        { id: 2, name: 'Bob' }
        ]));
    }
    // Rute: POST /api/users (simulasi tambah user)
    else if (url === '/api/users' && method === 'POST') {
        res.writeHead(201, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'User berhasil dibuat (contoh)' }));
    }
    // Jika tidak ada rute yang cocok → 404 Not Found
    else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>❌ 404 - Halaman Tidak Ditemukan</h1>');
    }
});

server.listen(3000, () => {
    console.log(`🚀 Server berjalan di http://localhost:3000`);
});
