<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        if (! app()->environment(['local', 'testing'])) {
            return;
        }

        $users = [
            [
                'name' => 'Test Staff',
                'email' => 'staff@bdms.test',
            ],
            [
                'name' => 'Test Manager',
                'email' => 'manager@bdms.test',
            ],
            [
                'name' => 'Test Director',
                'email' => 'director@bdms.test',
            ],
            [
                'name' => 'Test Administrator',
                'email' => 'admin@bdms.test',
            ],
        ];

        foreach ($users as $user) {
            User::updateOrCreate(
                ['email' => $user['email']],
                [
                    'name' => $user['name'],
                    'password' => 'BdmsTest@2026',
                    'email_verified_at' => now(),
                ],
            );
        }
    }
}