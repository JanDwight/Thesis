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
  

        $links = [
        [
            'class_code' => 'XSS 900',
            'class_description' => 'ARTS and CRAFTS	',
            'instructor_name' => 'John Doe martleo@gmail.com',
            'url'=>'http://localhost:3000/admin/links',
            'archived' => '0'

        ],
        [

            'class_code' => 'CSZ 321',
            'class_description' => 'Entrepreneurship in the modern world (Lecture)	',
            'instructor_name' => 'Professor X',
            'url'=>'https://www.teachenglishabroad.co/ultimate-guide-to-engaged-ells/100-esl-debate-topics-that-will-get-your-students-fired-up',
            'archived' => '0'

        ],
        [

            'class_code' => 'KA 213	',
            'class_description' => 'Modern Arts Compilation	',
            'instructor_name' => 'Mean Dean Bean	',
            'url'=>'https://www.pathofexile.com/trade/search/Ancestor',
            'archived' => '0'

        ],
        [

            'class_code' => 'HJI 092	',
            'class_description' => 'Industrial Engineering and foresightsz	',
            'instructor_name' => 'MARY Jane	',
            'url'=>'https://www.rev.com/blog/transcription-blog/usability-test-questions',
            'archived' => '0'

        ],
        [

            'class_code' => 'ZMS 123',
            'class_description' => 'Psychology Minor 1	',
            'instructor_name' => 'KRESTY KASTARK',
            'url'=>'https://www.rev.com/developers',
            'archived' => '0'

        ],
        [

            'class_code' => 'YTT 911',
            'class_description' => 'National Service Training Papers	',
            'instructor_name' => 'Doctor Pepper	',
            'url'=>'https://www.rev.com/developers',
            'archived' => '0'

        ],
        [

            'class_code' => 'MSV 699',
            'class_description' => 'Health and Proper Bandaging	',
            'instructor_name' => 'MR. Bondage Man	',
            'url'=>'https://careerfoundry.com/en/blog/ux-design/how-to-write-usability-testing-questions/',
            'archived' => '0'

        ],
        [

            'class_code' => 'CSZ 321.1	',
            'class_description' => 'Entrepreneurship in the modern world (Laboratory)	',
            'instructor_name' => 'Professor X	',
            'url'=>'https://careerfoundry.com/en/blog/ux-design/how-to-write-usability-testing-questions/',
            'archived' => '0'

        ],
        [

            'class_code' => 'This is a very long title to test if the slice 30 is working, it should cut off a specific amount of text in each table	',
            'class_description' => 'This is a very long title to test if the slice 30 is working, it should cut off a specific amount of text in each table	',
            'instructor_name' => 'This is a very long title to test if the slice 30 is working, it should cut off a specific amount of text in each table	',
            'url'=>'This is a very long title to test if the slice 30 is working, it should cut off a specific amount of text in each table	',
            'archived' => '0'

        ],
        [

            'class_code' => 'This is a very long title to test if the slice 30 is working, it should cut off a specific amount of text in each table	',
            'class_description' => 'History and His Past',
            'instructor_name' => 'MR Binabalikan',
            'url'=>'https://www.ionos.com/costs?__lf=Order-Tariff&__sendingdata=1&domainselect.domainname=psytal.net%231&__forcestop=true&__CMD(costs):SELWRP=domainselect',
            'archived' => '0'

        ],
        [

            'class_code' => 'ABS 333',
            'class_description' => 'Physical Education and Body Training',
            'instructor_name' => 'Dad Bod Pod',
            'url'=>'https://www.youtube.com/watch?v=QzW03hyw_bU',
            'archived' => '0'

        ],
        ];
        DB::table('links')->insert($links);

        $curriculum = [
        [
            'class_year' => '1st',
            'semester' => '1st',
            'course_code' => 'Psych 101	',
            'course_title' => 'Introduction to Psychology',
            'units' => '3',
            'hoursperWeek' => '3',
            'course_type' => 'Lec',
            'preReq' => 'N/A'
        ],

        [
            'class_year' => '1st',
            'semester' => '1st',
            'course_code' => 'SS 21',
            'course_title' => 'Understanding the Self',
            'units' => '3',
            'hoursperWeek' => '3',
            'course_type' => 'Lec',
            'preReq' => 'N/A'
        ],

        [
            'class_year' => '1st',
            'semester' => '1st',
            'course_code' => 'Eng 21',
            'course_title' => 'Purposive Communication',
            'units' => '3',
            'hoursperWeek' => '3',
            'course_type' => 'Lec',
            'preReq' => 'N/A'
        ],

        [
            'class_year' => '1st',
            'semester' => '1st',
            'course_code' => 'Eng 21',
            'course_title' => 'Contemporary World',
            'units' => '3',
            'hoursperWeek' => '3',
            'course_type' => 'Lec',
            'preReq' => 'N/A'
        ],

        [
            'class_year' => '1st',
            'semester' => '1st',
            'course_code' => 'Math 21',
            'course_title' => 'Mathematics in the Modern Word',
            'units' => '3',
            'hoursperWeek' => '3',
            'course_type' => 'Lec',
            'preReq' => 'N/A'
        ],

        [
            'class_year' => '1st',
            'semester' => '1st',
            'course_code' => 'SS 24',
            'course_title' => 'Ethics',
            'units' => '3',
            'hoursperWeek' => '3',
            'course_type' => 'Lec',
            'preReq' => 'N/A'
        ],

        [
            'class_year' => '1st',
            'semester' => '1st',
            'course_code' => 'PATHFIT 1',
            'course_title' => 'Movement Competency Training',
            'units' => '2',
            'hoursperWeek' => '2',
            'course_type' => 'Lec',
            'preReq' => 'N/A'
        ],

        [
            'class_year' => '1st',
            'semester' => '1st',
            'course_code' => 'NSTP 21',
            'course_title' => 'National Service Training Program 1',
            'units' => '3',
            'hoursperWeek' => '3',
            'course_type' => 'Lec',
            'preReq' => 'N/A'
        ]
        ];
        DB::table('curricula')->insert($curriculum);

        $classes = [
            [
                'class_year' => '1st',
                'semester' => '1st',
                'class_code' => 'f1',
                'course_code' => 'Psych 101	',
                'course_title' => 'Introduction to Psychology',
                'units' => '3',
                'course_type' => 'Lec',
                'instructor_name' => 'TBA',
                'class_section' => 'TBA'
            ],
    
            [
                'class_year' => '1st',
                'semester' => '1st',
                'class_code' => 'f2',
                'course_code' => 'SS 21',
                'course_title' => 'Understanding the Self',
                'units' => '3',
                'course_type' => 'Lec',
                'instructor_name' => 'TBA',
                'class_section' => 'TBA'
            ],
    
            [
                'class_year' => '1st',
                'semester' => '1st',
                'class_code' => 'f3',
                'course_code' => 'Eng 21',
                'course_title' => 'Purposive Communication',
                'units' => '3',
                'course_type' => 'Lec',
                'instructor_name' => 'TBA',
                'class_section' => 'TBA'
            ],
    
            [
                'class_year' => '1st',
                'semester' => '1st',
                'class_code' => 'f4',
                'course_code' => 'Eng 21',
                'course_title' => 'Contemporary World',
                'units' => '3',
                'course_type' => 'Lec',
                'instructor_name' => 'TBA',
                'class_section' => 'TBA'
            ],
    
            [
                'class_year' => '1st',
                'semester' => '1st',
                'class_code' => 'f5',
                'course_code' => 'Math 21',
                'course_title' => 'Mathematics in the Modern Word',
                'units' => '3',
                'course_type' => 'Lec',
                'instructor_name' => 'TBA',
                'class_section' => 'TBA'
            ],
    
            [
                'class_year' => '1st',
                'semester' => '1st',
                'class_code' => 'f6',
                'course_code' => 'SS 24',
                'course_title' => 'Ethics',
                'units' => '3',
                'course_type' => 'Lec',
                'instructor_name' => 'TBA',
                'class_section' => 'TBA'
            ],
    
            [
                'class_year' => '1st',
                'semester' => '1st',
                'class_code' => 'f7',
                'course_code' => 'PATHFIT 1',
                'course_title' => 'Movement Competency Training',
                'units' => '2',
                'course_type' => 'Lec',
                'instructor_name' => 'TBA',
                'class_section' => 'TBA'
            ],
    
            [
                'class_year' => '1st',
                'semester' => '1st',
                'class_code' => 'f8',
                'course_code' => 'NSTP 21',
                'course_title' => 'National Service Training Program 1',
                'units' => '3',
                'course_type' => 'Lec',
                'instructor_name' => 'TBA',
                'class_section' => 'TBA'
            ]
            ];
            DB::table('classes')->insert($classes);
    }
}
