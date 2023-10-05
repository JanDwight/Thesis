<?php

namespace Database\Seeders;
use Illuminate\Support\Facades\DB;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        //
        $users = [
            [
                'id' => 82,
                'name' => 'Admin',
                'password' => '$2y$10$YOmO1o82p8a05a1lJxxGyeVVfYXEMdKbZQ5Ink9jqIYyYnqJFA2lm', // Hashed password
                'role' => 1,
                'email' => 'admin@gmail.com',
                'archived' => 0,
                'created_at' => null, // Let Laravel handle timestamps
                'updated_at' => null,
            ],
            [
                'id' => 83,
                'name' => 'Staff',
                'password' => '$2y$10$WcYazSdUzVNS8Q1QAyWwUuQi.JgtyGJPKdtT0TTw8dS.K08PtzX2a', // Hashed password
                'role' => 2,
                'email' => 'staff@gmail.com',
                'archived' => 0,
                'created_at' => null,
                'updated_at' => null,
            ],
            [
                'id' => 84,
                'name' => 'Instructor',
                'password' => '$2y$10$vjkDK/szd.NswOtgdIZsIe2nDHlgPlpjerikbvQJfY59p.7XVaEae', // Hashed password
                'role' => 3,
                'email' => 'instructor@gmail.com',
                'archived' => 0,
                'created_at' => null,
                'updated_at' => null,
            ],
            [
                'id' => 85,
                'name' => 'Student',
                'password' => '$2y$10$qB0RQ9oVhyqs5opPSChTCOWPcEwXuaaMzyFhr8zkA62nvbcl2uwp.', // Hashed password
                'role' => 4,
                'email' => 'student@gmail.com',
                'archived' => 0,
                'created_at' => null,
                'updated_at' => null,
            ],
            [
                'id' => 86,
                'name' => 'newstudent',
                'password' => '$2y$10$wt9jHpHkcWLT6PR1W952M.7ByMpORxT6pZo1NxqS1yLLeeUC4hBWi', // Hashed password
                'role' => 4,
                'email' => 'new5@gmail.com',
                'archived' => 0,
                'created_at' => '2023-09-25 01:23:39',
                'updated_at' => '2023-09-25 01:23:39',
            ],
            [
                'id' => 87,
                'name' => 'student555',
                'password' => '$2y$10$/UkIHbgiOeL66M7OdU0ay.QudmaLbjKzIck43t50iofKPAgnC6U9W', // Hashed password
                'role' => 4,
                'email' => 'student5@gmail.com',
                'archived' => 0,
                'created_at' => '2023-09-29 06:31:30',
                'updated_at' => '2023-09-29 07:18:50',
            ],
            [
                'id' => 88,
                'name' => 'Mar T. Leo',
                'password' => '$2y$10$mm6C6glmEToIjeKAjJGOWeSoDkLZBPJRS59gGd7wcuut2BU8cJMxq', // Hashed password
                'role' => 1,
                'email' => 'martleo@gmail.com',
                'archived' => 0,
                'created_at' => '2023-09-29 07:09:32',
                'updated_at' => '2023-09-29 07:09:32',
            ],
        ];

        DB::table('users')->insert($users);
    }
}
