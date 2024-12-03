
Tentang Kong
Kong adalah platform layanan yang membantu menghubungkan dan mengelola API serta microservices dalam skala besar.
Kong Gateway (API Gateway dari Kong Inc.) adalah salah satu layanan yang disediakan oleh Kong Inc. Platform ini terbagi menjadi 2 versi: Community dan Enterprise.
Versi Community gratis dan open-source, sedangkan versi Enterprise berbayar dan memiliki lebih banyak fitur.

Cara Menggunakan Kong
Terdapat dua mode untuk menggunakan Kong Gateway: dengan basis data dan tanpa basis data.

Mode dengan basis data:
Dalam mode ini, Anda dapat menggunakan Kong Manager (UI) untuk mengelola API, plugin, dll. Selain itu, Admin API (port 8001, via REST) juga tersedia untuk melakukan operasi yang sama dengan Kong Manager.

Mode tanpa basis data:
Dalam mode ini, Kong Gateway berjalan secara deklaratif, yaitu membaca file konfigurasi (YAML) dan menerapkan konfigurasi yang ada di dalamnya.
Admin API dan Kong Manager hanya tersedia dalam mode baca (read-only), sehingga perubahan hanya bisa dilakukan melalui file konfigurasi. Anda dapat menggunakan Kong Deck untuk melakukan perubahan.

Menjalankan Kong Gateway
Di dalam proyek, terdapat dua mode untuk menjalankan Kong Gateway:

Dengan basis data (Postgres):
Gunakan file docker-compose.with-db.yaml.

Tanpa basis data:
Gunakan file docker-compose.with-dbless.yaml.
File konfigurasi tanpa basis data memiliki volume untuk file konfigurasi (kong.yml).

Kong Deck
State adalah kumpulan konfigurasi Kong yang menjadi sumber kebenaran utama. Deck akan mengambil state ini dan membuat panggilan ke Admin API di Kong untuk menyamakan konfigurasi yang tersimpan dalam basis data Kong dengan state tersebut. Hal ini dikenal sebagai state target atau state yang diinginkan.

Memeriksa Koneksi Deck dengan Kong Gateway
Untuk memeriksa apakah Deck terhubung ke Kong Gateway, jalankan perintah berikut:

bash
Copy code
docker run --add-host host.docker.internal:host-gateway --network host kong/deck:v1.37.0 gateway ping --kong-addr http://host.docker.internal:8001  
Membuat Dump dari Kong Gateway via Deck
Untuk membuat dump dari Kong Gateway menggunakan Deck, jalankan perintah berikut:

bash
Copy code
docker run --add-host host.docker.internal:host-gateway --network host kong/deck:v1.37.0 gateway dump --kong-addr http://host.docker.internal:8001  
Perintah ini akan menghasilkan output file YAML dari semua konfigurasi Kong Gateway di konsol.

API dalam Proyek
API untuk Partners (Nest.js)
Terdapat 2 API untuk partners:

Partner 1:

Alamat asli: http://localhost:3000
Alamat di Kong Gateway: http://host.docker.internal:8000/partner1
Endpoint reservasi tiket dilindungi oleh autentikasi key-auth.
Gunakan header X-Api-Token dengan nilai 123 untuk mengaksesnya.
File api.http berisi pengujian untuk API ini.

Partner 2:

Alamat asli: http://localhost:3001
Alamat di Kong Gateway: http://host.docker.internal:8000/partner2
Endpoint reservasi tiket dilindungi oleh autentikasi key-auth.
Gunakan header X-Api-Token dengan nilai 000 untuk mengaksesnya.
API Penjualan (Golang)
Alamat asli: http://localhost:8080
Alamat di Kong Gateway: http://host.docker.internal:8000/golang
Semua endpoint dilindungi oleh autentikasi key-auth.
Gunakan header X-Api-Token dengan nilai 890 untuk mengaksesnya.
Front-end (Next.js)
Alamat asli: http://localhost:3002
Alamat di Kong Gateway: http://host.docker.internal:8000/nextjs

Note Abdul & Adrian
Kita harus memastikan bahwa semua API yang ada di dalam proyek ini sudah terintegrasi


Support Contact
082318170519
abdulmfmuti@gmail.com