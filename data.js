// Sample data for teacher performance analysis
const teacherData = {
    teachers: [
        {
            id: "T001",
            name: "Dr. Sarah Johnson",
            department: "Computer Science",
            courses: ["Introduction to Programming", "Data Structures"],
            metrics: {
                averageGrade: 87,
                attendanceRate: 92,
                studentSatisfaction: 4.5,
                engagementScore: 88
            },
            feedback: [
                {
                    courseId: "CS101",
                    semester: "Fall 2023",
                    ratings: {
                        teachingStyle: 4.6,
                        clarity: 4.4,
                        knowledge: 4.8,
                        accessibility: 4.3
                    },
                    comments: [
                        "Excellent at explaining complex concepts",
                        "Very helpful during office hours",
                        "Makes programming fun and engaging"
                    ]
                }
            ],
            teachingStyle: {
                interactive: 85,
                practical: 90,
                theoretical: 75,
                innovative: 88
            }
        },
        {
            id: "T002",
            name: "Prof. Michael Chen",
            department: "Mathematics",
            courses: ["Calculus I", "Linear Algebra"],
            metrics: {
                averageGrade: 82,
                attendanceRate: 88,
                studentSatisfaction: 4.2,
                engagementScore: 85
            },
            feedback: [
                {
                    courseId: "MATH201",
                    semester: "Fall 2023",
                    ratings: {
                        teachingStyle: 4.3,
                        clarity: 4.5,
                        knowledge: 4.9,
                        accessibility: 4.0
                    },
                    comments: [
                        "Very thorough explanations",
                        "Challenging but fair assignments",
                        "Needs more real-world examples"
                    ]
                }
            ],
            teachingStyle: {
                interactive: 70,
                practical: 75,
                theoretical: 95,
                innovative: 80
            }
        }
    ],
    
    courses: [
        {
            id: "CS101",
            name: "Introduction to Programming",
            department: "Computer Science",
            level: "Undergraduate",
            metrics: {
                averageGrade: 85,
                passRate: 92,
                dropoutRate: 5
            }
        },
        {
            id: "MATH201",
            name: "Calculus I",
            department: "Mathematics",
            level: "Undergraduate",
            metrics: {
                averageGrade: 78,
                passRate: 88,
                dropoutRate: 8
            }
        }
    ],
    
    learnerTypes: [
        {
            type: "Visual",
            characteristics: ["Prefers diagrams", "Learns from demonstrations", "Benefits from visual aids"],
            recommendedTeachingStyles: ["interactive", "innovative"]
        },
        {
            type: "Practical",
            characteristics: ["Hands-on learning", "Real-world applications", "Project-based"],
            recommendedTeachingStyles: ["practical", "interactive"]
        },
        {
            type: "Theoretical",
            characteristics: ["Abstract thinking", "Conceptual understanding", "Research-oriented"],
            recommendedTeachingStyles: ["theoretical", "innovative"]
        }
    ]
};

// Function to predict best teacher match for a learning style
function predictTeacherMatch(learnerType) {
    const learnerPreferences = teacherData.learnerTypes.find(lt => lt.type.toLowerCase() === learnerType.toLowerCase());
    if (!learnerPreferences) return null;

    let bestMatch = {
        teacher: null,
        score: 0
    };

    teacherData.teachers.forEach(teacher => {
        let matchScore = 0;
        learnerPreferences.recommendedTeachingStyles.forEach(style => {
            matchScore += teacher.teachingStyle[style] || 0;
        });
        matchScore = matchScore / learnerPreferences.recommendedTeachingStyles.length;

        if (matchScore > bestMatch.score) {
            bestMatch = {
                teacher: teacher,
                score: matchScore
            };
        }
    });

    return bestMatch;
}

// Function to get performance analytics
function getPerformanceAnalytics() {
    return {
        overallStats: {
            averageGrade: teacherData.teachers.reduce((acc, t) => acc + t.metrics.averageGrade, 0) / teacherData.teachers.length,
            averageSatisfaction: teacherData.teachers.reduce((acc, t) => acc + t.metrics.studentSatisfaction, 0) / teacherData.teachers.length,
            averageAttendance: teacherData.teachers.reduce((acc, t) => acc + t.metrics.attendanceRate, 0) / teacherData.teachers.length
        },
        departmentStats: {
            "Computer Science": {
                averageGrade: 87,
                satisfaction: 4.5
            },
            "Mathematics": {
                averageGrade: 82,
                satisfaction: 4.2
            }
        }
    };
}
