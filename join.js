export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const { nama, email, pesan } = req.body;

  console.log(`Join Request:\nNama: ${nama}\nEmail: ${email}\nPesan: ${pesan}`);

  return res.status(200).json({ message: 'Berhasil kirim!' });
}