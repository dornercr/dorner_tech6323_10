// Course content and quiz data
const courseContent = {
    '1.1': {
        title: 'UDL Basics Overview',
        type: 'lecture',
        description: `
            <p>Universal Design for Learning (UDL) is a research-based framework aimed at improving and optimizing teaching and learning for all individuals. It is grounded in neuroscience and focuses on removing barriers in education while fostering an inclusive environment.</p>
            <div class="content-box">
                <h4>Key Concepts:</h4>
                <ul>
                    <li><strong>Multiple Means of Representation:</strong> Present information in different ways to cater to diverse learning styles, such as visual, auditory, and kinesthetic.</li>
                    <li><strong>Multiple Means of Action and Expression:</strong> Provide learners with different ways to demonstrate their knowledge and skills.</li>
                    <li><strong>Multiple Means of Engagement:</strong> Motivate and sustain learners’ interest by offering choices, challenges, and relevance.</li>
                </ul>
            </div>
            <div class="content-box">
                <h4>Learning Objectives:</h4>
                <ul>
                    <li>Define the core principles of UDL.</li>
                    <li>Explain how UDL addresses diversity in the classroom.</li>
                    <li>Identify examples of UDL implementation in teaching practices.</li>
                </ul>
            </div>
        `
    },
    '1.2': {
        title: 'Accessibility and Diversity',
        type: 'quiz',
        description: `
            <p>This quiz evaluates your understanding of accessibility and diversity as they relate to UDL. Answer the questions below to check your knowledge.</p>
            <div id="quizContainer" class="quiz-container"></div>
            <div class="content-box">
                <h4>Sample Questions:</h4>
                <ol>
                    <li>What are the three main principles of UDL?</li>
                    <li>Provide an example of a barrier that UDL can help remove in a classroom setting.</li>
                    <li>How does UDL promote inclusivity for learners with disabilities?</li>
                </ol>
            </div>
        `
    },
    '1.3': {
        title: 'Engaging Students',
        type: 'activity',
        description: `
            <p>Engagement is a critical component of effective teaching and learning. In this activity, we will explore strategies to enhance student engagement through live polling, data visualization, and discussion.</p>
            <div class="content-box">
                <h4>Live Poll:</h4>
                <p>Answer the question below to share your thoughts:</p>
                <div id="pollContainer"></div>
            </div>
            <div class="content-box">
                <h4>Interactive Visualization:</h4>
                <p>Review the chart below to analyze trends in student engagement.</p>
                <div id="chartContainer"></div>
            </div>
            <div class="content-box">
                <h4>Discussion:</h4>
                <p>Join the conversation by posting your insights on the following prompt:</p>
                <blockquote>
                    "What strategies have you found most effective in engaging students, and why?"
                </blockquote>
                <div id="discussionContainer"></div>
            </div>
            <div class="content-box">
                <h4>Activity Objectives:</h4>
                <ul>
                    <li>Identify common challenges to student engagement.</li>
                    <li>Propose innovative solutions to overcome these challenges.</li>
                    <li>Collaborate with peers to develop a list of actionable engagement strategies.</li>
                </ul>
            </div>
        `
    }
};

// Add these to your courseContent object
courseContent['2.1'] = {
    title: 'Implementation Strategies',
    type: 'lecture',
    description: `
        <p>Implementing UDL effectively requires strategic planning and practical application. This module explores key implementation strategies across different educational contexts.</p>
        <div class="content-box">
            <h4>Key Implementation Areas:</h4>
            <ul>
                <li><strong>Curriculum Design:</strong> Creating flexible learning materials and pathways</li>
                <li><strong>Assessment Methods:</strong> Developing varied assessment strategies</li>
                <li><strong>Technology Integration:</strong> Leveraging digital tools for accessibility</li>
            </ul>
        </div>
        <div class="content-box">
            <h4>Learning Objectives:</h4>
            <ul>
                <li>Design flexible curriculum materials using UDL principles</li>
                <li>Develop diverse assessment strategies</li>
                <li>Integrate appropriate technology tools</li>
            </ul>
        </div>
    `
},

    courseContent['2.2'] = {
        title: 'Implementation Quiz',
        type: 'quiz',
        description: `<div id="quizContainer" class="quiz-container"></div>`
    },

    courseContent['2.3'] = {
        title: 'Technology Integration',
        type: 'activity',
        description: `
        <p>Explore how technology can enhance UDL implementation through interactive polling and discussion.</p>
        <div class="content-box">
            <h4>Live Poll:</h4>
            <div id="pollContainer"></div>
        </div>
        <div class="content-box">
            <h4>Implementation Data:</h4>
            <div id="chartContainer"></div>
        </div>
        <div class="content-box">
            <h4>Discussion Forum:</h4>
            <p>Share your experiences with UDL implementation:</p>
            <div id="discussionContainer"></div>
        </div>
    `
    };

// Add these to your courseContent object
courseContent['3.1'] = {
    "title": "Assessment Methods",
    "type": "lecture",
    "description": `
        <p>Assessing student progress in a UDL environment requires varied and inclusive methods that align with diverse learner needs. This module introduces key assessment strategies that provide flexibility and ensure fairness.</p>
        <div class="content-box">
            <h4>Key Assessment Strategies:</h4>
            <ul>
                <li>
                    <strong>Formative Assessments:</strong>
                    Ongoing feedback through quizzes, peer reviews, and in-class discussions to monitor progress and adjust teaching methods.
                </li>
                <li>
                    <strong>Summative Assessments:</strong>
                    Multiple formats for final assessments, such as projects, portfolios, presentations, and written exams.
                </li>
                <li>
                    <strong>Self-Assessments:</strong>
                    Encouraging students to reflect on their learning journey and set personal goals.
                </li>
                <li>
                    <strong>Use of Rubrics:</strong>
                    Transparent evaluation criteria that provide clarity and help students understand expectations.
                </li>
            </ul>
        </div>
        <p>By employing these strategies, educators can better gauge student understanding and provide equitable opportunities for all learners to succeed.</p>
    `
},

    courseContent['3.2'] = {
        "title": "Assessment Quiz",
        "type": "quiz",
        "description": `
        <div id="quizContainer" class="quiz-container">
            <p>Test your knowledge of inclusive assessment strategies and their application within the UDL framework.</p>
        </div>
    `
    },

    courseContent['3.3'] = {
        "title": "Adaptation in Practice",
        "type": "activity",
        "description": `
        <p>Learn how to adapt your teaching methods and materials to meet diverse learner needs. Participate in interactive activities and discussions to share ideas and strategies.</p>
        <div class="content-box">
            <h4>Live Poll:</h4>
            <div id="pollContainer"></div>
        </div>
        <div class="content-box">
            <h4>Adaptation Examples:</h4>
            <p>Explore real-world examples of UDL adaptation:</p>
            <ul>
                <li>Modifying lesson plans to include multimedia resources.</li>
                <li>Using assistive technology tools like speech-to-text software.</li>
                <li>Providing flexible deadlines for assignments.</li>
            </ul>
        </div>
        <div class="content-box">
            <h4>Discussion Forum:</h4>
            <p>Share your experiences and challenges in adapting teaching methods to diverse needs:</p>
            <div id="discussionContainer"></div>
        </div>
    `
    }



const quizQuestions = [
    {
        question: "Which of the following strategies supports UDL principles in diverse classrooms?",
        options: [
            "Providing content in only written format",
            "Offering multiple ways to demonstrate learning",
            "Using a single assessment method",
            "Limiting technology use"
        ],
        correct: 1,
        explanation: "UDL emphasizes multiple means of representation, action, and engagement. Offering various ways to demonstrate learning supports diverse learning styles."
    },
    {
        question: "What is a key principle of UDL in content presentation?",
        options: [
            "Using only visual aids",
            "Providing information through multiple sensory channels",
            "Limiting to text-only content",
            "Using only audio materials"
        ],
        correct: 1,
        explanation: "UDL advocates for presenting information through multiple sensory channels to accommodate different learning preferences and needs."
    },
    {
        question: "Which approach best supports student engagement in UDL?",
        options: [
            "Rigid assignment structure",
            "Single format assessments",
            "Flexible learning paths and choices",
            "Standardized timelines"
        ],
        correct: 2,
        explanation: "Flexible learning paths and choices allow students to engage with content in ways that best suit their learning styles and preferences."
    }
];

// Add Unit 2 quiz questions
const unit2Questions = [
    {
        question: "Which approach best demonstrates effective UDL implementation?",
        options: [
            "Using a single textbook for all students",
            "Providing multiple ways to access content",
            "Standardizing all assessments",
            "Limiting technology use"
        ],
        correct: 1,
        explanation: "Effective UDL implementation involves providing multiple ways to access content, accommodating different learning preferences and needs."
    },
    {
        question: "What is a key consideration when designing UDL-aligned assessments?",
        options: [
            "Using only written tests",
            "Standardizing all formats",
            "Offering flexible submission options",
            "Limiting assessment time"
        ],
        correct: 2,
        explanation: "UDL-aligned assessments should offer flexible options for students to demonstrate their knowledge and skills."
    },
    {
        question: "Which technology integration strategy supports UDL principles?",
        options: [
            "Requiring all students to use the same device",
            "Limiting digital tool options",
            "Using only traditional methods",
            "Providing multiple digital tool choices"
        ],
        correct: 3,
        explanation: "Providing multiple digital tool choices allows students to select the most effective tools for their learning needs."
    }
];

const unit3Questions = [
    {
        question: "What is the primary goal of UDL-aligned assessment methods?",
        options: [
            "To focus solely on summative evaluations",
            "To create uniform testing environments",
            "To accommodate diverse learning needs",
            "To prioritize time efficiency over fairness"
        ],
        correct: 2,
        explanation: "The goal of UDL-aligned assessments is to accommodate diverse learning needs by providing flexibility and inclusivity."
    },
    {
        question: "Which of the following best describes formative assessments in a UDL framework?",
        options: [
            "A single final project",
            "Ongoing feedback to guide learning",
            "Standardized multiple-choice tests",
            "Unchanging rubrics for all students"
        ],
        correct: 1,
        explanation: "Formative assessments involve ongoing feedback to help monitor student progress and adapt teaching strategies as needed."
    },
    {
        question: "What is an example of adaptation in practice under the UDL framework?",
        options: [
            "Providing the same learning materials to all students",
            "Allowing students to choose project formats",
            "Requiring uniform submission deadlines",
            "Using only written instructions"
        ],
        correct: 1,
        explanation: "Allowing students to choose project formats is an example of adaptation, supporting diverse methods of expression and engagement."
    },
    {
        question: "How can self-assessments support UDL principles?",
        options: [
            "By replacing all other assessment types",
            "By focusing only on academic performance",
            "By encouraging students to reflect on their learning process",
            "By eliminating the need for instructor feedback"
        ],
        correct: 2,
        explanation: "Self-assessments encourage students to reflect on their learning process and set personal goals, promoting autonomy and engagement."
    },
    {
        question: "Which of the following strategies fosters inclusive adaptation in a UDL classroom?",
        options: [
            "Offering identical assignments for all students",
            "Restricting project topics to predefined options",
            "Using assistive technologies like speech-to-text tools",
            "Limiting students to traditional lecture formats"
        ],
        correct: 2,
        explanation: "Using assistive technologies supports inclusivity by accommodating different learning needs and abilities."
    }
];


// Initialize module data with forum property
const moduleData = {
    1: {
        poll: {
            question: "Which engagement strategy do you find most effective?",
            options: [
                "Interactive discussions",
                "Hands-on activities",
                "Multimedia content",
                "Group projects"
            ],
            votes: [0, 0, 0, 0]
        },
        forum: {
            posts: []  // Initialize empty posts array
        }
    },
    2: {
        poll: {
            question: "Which UDL implementation tool do you use most frequently?",
            options: [
                "Learning Management Systems",
                "Screen readers and accessibility tools",
                "Multimedia creation tools",
                "Collaborative platforms"
            ],
            votes: [0, 0, 0, 0]
        },
        forum: {
            posts: []
        }
    },
    3: {
        poll: {
            question: "What is the biggest challenge in engaging students?",
            options: [
                "Maintaining focus and attention",
                "Creating inclusive activities",
                "Adapting to diverse learning preferences",
                "Encouraging active participation"
            ],
            votes: [0, 0, 0, 0]
        },
        forum: {
            posts: []
        }
    }

};


// Quiz class with window binding
window.Quiz = class Quiz {
    constructor(container, questions) {
        this.container = container;
        this.questions = questions;
        this.currentQuestion = 0;
        this.score = 0;
        this.showFeedback = false;
        this.quizComplete = false;
        this.render();
    }

    render() {
        if (this.quizComplete) {
            this.renderComplete();
        } else {
            this.renderQuestion();
        }
    }

    renderQuestion() {
        const question = this.questions[this.currentQuestion];
        const progress = ((this.currentQuestion + 1) / this.questions.length) * 100;

        this.container.innerHTML = `
            <div class="quiz-progress">
                <div>Question ${this.currentQuestion + 1} of ${this.questions.length}</div>
                <div class="progress-bar">
                    <div class="progress-fill" style="width: ${progress}%"></div>
                </div>
            </div>
            <div class="quiz-question">${question.question}</div>
            <div class="quiz-options">
                ${question.options.map((option, index) => `
                    <button class="quiz-option"
                            onclick="quiz.handleAnswer(${index})"
                            ${this.showFeedback ? 'disabled' : ''}>
                        ${option}
                    </button>
                `).join('')}
            </div>
            ${this.showFeedback ? `
                <div class="quiz-feedback">
                    <h4>Explanation:</h4>
                    <p>${question.explanation}</p>
                </div>
                <button class="next-btn" onclick="quiz.nextQuestion()">
                    ${this.currentQuestion < this.questions.length - 1 ? 'Next Question' : 'Complete Quiz'}
                </button>
            ` : ''}
        `;
    }

    renderComplete() {
        this.container.innerHTML = `
            <div class="quiz-complete">
                <h3>Quiz Complete!</h3>
                <p>Your Score: ${this.score}/${this.questions.length}</p>
                <p>${this.score === this.questions.length ?
            "Perfect score! Excellent understanding of UDL principles!" :
            "Review the questions you missed to better understand UDL concepts."}
                </p>
                <button class="next-btn" onclick="quiz.resetQuiz()">Retake Quiz</button>
            </div>
        `;
    }

    handleAnswer(answerIndex) {
        if (this.showFeedback) return;

        this.showFeedback = true;
        const correct = answerIndex === this.questions[this.currentQuestion].correct;

        if (correct) {
            this.score++;
        }

        const options = this.container.querySelectorAll('.quiz-option');
        options[answerIndex].classList.add(correct ? 'correct' : 'incorrect');
        options[this.questions[this.currentQuestion].correct].classList.add('correct');

        this.render();
    }

    nextQuestion() {
        if (this.currentQuestion < this.questions.length - 1) {
            this.currentQuestion++;
            this.showFeedback = false;
        } else {
            this.quizComplete = true;
        }
        this.render();
    }

    resetQuiz() {
        this.currentQuestion = 0;
        this.score = 0;
        this.showFeedback = false;
        this.quizComplete = false;
        this.render();
    }
};

// Global variables
window.quiz = null;
window.activeUnit = 1;
window.charts = {};

// Discussion board functions
function initializeDiscussionBoard(container) {
    if (!moduleData[activeUnit].forum) {
        moduleData[activeUnit].forum = { posts: [] };
    }

    container.innerHTML = `
        <div class="forum-board">
            <h4>Discussion Forum</h4>
            <div class="create-post-section">
                <div class="input-group">
                    <input type="text" id="postAuthor" class="forum-input" placeholder="Your name">
                    <textarea id="postText" class="forum-input" placeholder="Share your thoughts..."></textarea>
                    <button onclick="createForumPost()" class="forum-button">Post</button>
                </div>
            </div>
            <div id="forumPosts" class="forum-posts">
                <div class="no-posts">No posts yet. Start the discussion!</div>
            </div>
        </div>
    `;
    window.refreshForumPosts();
}

// Make all functions globally available
window.createForumPost = function() {
    const authorElement = document.getElementById('postAuthor');
    const textElement = document.getElementById('postText');

    if (!authorElement || !textElement) {
        console.error('Forum input elements not found');
        return;
    }

    const author = authorElement.value.trim();
    const text = textElement.value.trim();

    if (!author || !text) {
        alert('Please fill in both name and message');
        return;
    }

    if (!moduleData[activeUnit].forum) {
        moduleData[activeUnit].forum = { posts: [] };
    }

    const newPost = {
        id: Date.now(),
        author: author,
        content: text,
        timestamp: new Date().toLocaleString(),
        likes: 0,
        replies: []
    };

    moduleData[activeUnit].forum.posts.unshift(newPost);

    authorElement.value = '';
    textElement.value = '';

    window.refreshForumPosts();
};

window.refreshForumPosts = function() {
    const postsContainer = document.getElementById('forumPosts');
    if (!postsContainer) return;

    const posts = moduleData[activeUnit].forum.posts;

    if (posts.length === 0) {
        postsContainer.innerHTML = '<div class="no-posts">No posts yet. Start the discussion!</div>';
        return;
    }

    postsContainer.innerHTML = posts.map(post => `
        <div class="forum-post" id="post-${post.id}">
            <div class="post-main">
                <div class="post-header">
                    <span class="post-author">${post.author}</span>
                    <span class="post-time">${post.timestamp}</span>
                </div>
                <div class="post-content">${post.content}</div>
                <div class="post-actions">
                    <button onclick="likeForumPost(${post.id})" class="action-button">
                        👍 <span id="likes-${post.id}">${post.likes}</span>
                    </button>
                    <button onclick="toggleReplyBox(${post.id})" class="action-button">Reply</button>
                </div>
            </div>
            
            <div class="reply-box" id="reply-box-${post.id}" style="display: none;">
                <input type="text" id="reply-author-${post.id}" class="forum-input" placeholder="Your name">
                <textarea id="reply-text-${post.id}" class="forum-input" placeholder="Write your reply..."></textarea>
                <button onclick="submitReply(${post.id})" class="forum-button">Submit Reply</button>
            </div>

            <div class="post-replies">
                ${renderReplies(post.replies)}
            </div>
        </div>
    `).join('');
};

window.renderReplies = function(replies) {
    if (!replies.length) return '';

    return replies.map(reply => `
        <div class="reply">
            <div class="reply-header">
                <span class="reply-author">${reply.author}</span>
                <span class="reply-time">${reply.timestamp}</span>
            </div>
            <div class="reply-content">${reply.content}</div>
        </div>
    `).join('');
};

window.likeForumPost = function(postId) {
    const post = moduleData[activeUnit].forum.posts.find(p => p.id === postId);
    if (post) {
        post.likes++;
        const likesElement = document.getElementById(`likes-${postId}`);
        if (likesElement) {
            likesElement.textContent = post.likes;
        }
    }
};

window.toggleReplyBox = function(postId) {
    const replyBox = document.getElementById(`reply-box-${postId}`);
    if (replyBox) {
        replyBox.style.display = replyBox.style.display === 'none' ? 'block' : 'none';
    }
};

window.submitReply = function(postId) {
    const authorElement = document.getElementById(`reply-author-${postId}`);
    const textElement = document.getElementById(`reply-text-${postId}`);

    const author = authorElement.value.trim();
    const text = textElement.value.trim();

    if (!author || !text) {
        alert('Please fill in both name and reply');
        return;
    }

    const post = moduleData[activeUnit].forum.posts.find(p => p.id === postId);
    if (post) {
        post.replies.push({
            id: Date.now(),
            author: author,
            content: text,
            timestamp: new Date().toLocaleString()
        });

        authorElement.value = '';
        textElement.value = '';
        toggleReplyBox(postId);

        refreshForumPosts();
    }
};

// Poll functions
function initializePoll(container) {
    const module = moduleData[activeUnit];
    container.innerHTML = `
        <h4>Quick Poll</h4>
        <p>${module.poll.question}</p>
        <div class="poll-options">
            ${module.poll.options.map((option, index) => `
                <button onclick="handleVote(${index})" class="poll-button">${option}</button>
            `).join('')}
        </div>
        <div id="pollResults" class="poll-results"></div>
    `;
}

window.handleVote = function(optionIndex) {
    moduleData[activeUnit].poll.votes[optionIndex]++;
    updatePollDisplay();
    updateChart();
};

function updatePollDisplay() {
    const resultsDiv = document.getElementById('pollResults');
    const votes = moduleData[activeUnit].poll.votes;
    const total = votes.reduce((a, b) => a + b, 0);

    resultsDiv.innerHTML = moduleData[activeUnit].poll.options.map((option, index) => `
        <div>${option}: ${votes[index]} vote${votes[index] !== 1 ? 's' : ''} 
        (${total > 0 ? Math.round((votes[index] / total) * 100) : 0}%)</div>
    `).join('');
}

// Chart functions
function initializeChart(container) {
    container.innerHTML = '<canvas id="resultsChart"></canvas>';
    const ctx = document.getElementById('resultsChart').getContext('2d');

    charts[activeUnit] = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: moduleData[activeUnit].poll.options,
            datasets: [{
                label: 'Votes',
                data: moduleData[activeUnit].poll.votes,
                backgroundColor: 'rgba(54, 162, 235, 0.5)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: { stepSize: 1 }
                }
            }
        }
    });
}

function updateChart() {
    if (charts[activeUnit]) {
        charts[activeUnit].data.datasets[0].data = moduleData[activeUnit].poll.votes;
        charts[activeUnit].update();
    }
}

// Add this function before renderContent()
function renderSection(sectionId, content) {
    return `
        <div class="section">
            <div class="section-header" data-section="${sectionId}">
                <h3>${content.title}</h3>
            </div>
            <div class="section-content" id="content-${sectionId}">
                ${content.description}
            </div>
        </div>
    `;
}

// First, let's organize quiz questions by unit
const quizzesByUnit = {
    1: quizQuestions,
    2: unit2Questions,
    3: unit3Questions
};

// Modify the renderContent function
function renderContent() {
    const contentContainer = document.getElementById('courseContent');
    if (!contentContainer) return;

    let html = '';

    Object.entries(courseContent).forEach(([sectionId, content]) => {
        if (sectionId.startsWith(activeUnit.toString())) {
            html += renderSection(sectionId, content);
        }
    });

    contentContainer.innerHTML = html;

    // Initialize features for any unit
    const quizContainer = document.getElementById('quizContainer');
    if (quizContainer && quizzesByUnit[activeUnit]) {
        window.quiz = new Quiz(quizContainer, quizzesByUnit[activeUnit]);
    }

    // Initialize other interactive elements if they exist
    const pollContainer = document.getElementById('pollContainer');
    const chartContainer = document.getElementById('chartContainer');
    const discussionContainer = document.getElementById('discussionContainer');

    if (pollContainer) initializePoll(pollContainer);
    if (chartContainer) initializeChart(chartContainer);
    if (discussionContainer) initializeDiscussionBoard(discussionContainer);

    // Add click handlers for section toggles
    document.querySelectorAll('.section-header').forEach(header => {
        header.addEventListener('click', () => {
            const sectionId = header.dataset.section;
            const content = document.getElementById(`content-${sectionId}`);
            if (content) {
                content.classList.toggle('active');
            }
        });
    });
}

// Initialize everything when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Set up unit navigation
    document.querySelectorAll('.unit-btn').forEach(button => {
        button.addEventListener('click', () => {
            document.querySelectorAll('.unit-btn').forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            activeUnit = parseInt(button.dataset.unit);
            renderContent();
        });
    });

    // Set initial active unit
    const activeButton = document.querySelector('.unit-btn[data-unit="1"]');
    if (activeButton) {
        activeButton.classList.add('active');
    }

    // Initial render
    renderContent();

    // Set up section toggles for initial content
    document.querySelectorAll('.section-header').forEach(header => {
        header.addEventListener('click', () => {
            const sectionId = header.dataset.section;
            const content = document.getElementById(`content-${sectionId}`);
            if (content) {
                content.classList.toggle('active');
            }
        });
    });

    // Show first section by default
    const firstSection = document.querySelector('.section-content');
    if (firstSection) {
        firstSection.classList.add('active');
    }
});

// Add CSS styles for the forum
const forumStyles = document.createElement('style');
forumStyles.textContent = `
    .forum-board {
        background: white;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }

    .forum-input {
        width: 100%;
        padding: 10px;
        margin: 5px 0;
        border: 1px solid #ddd;
        border-radius: 4px;
    }

    textarea.forum-input {
        min-height: 100px;
        resize: vertical;
    }

    .forum-button {
        background: #007bff;
        color: white;
        padding: 10px 20px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        margin-top: 10px;
    }

    .forum-button:hover {
        background: #0056b3;
    }

    .forum-post {
        border: 1px solid #ddd;
        border-radius: 4px;
        margin: 15px 0;
        padding: 15px;
    }

    .post-header {
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;
        color: #666;
    }

    .post-content {
        margin: 10px 0;
    }

    .action-button {
        background: none;
        border: 1px solid #ddd;
        padding: 5px 10px;
        margin-right: 10px;
        border-radius: 4px;
        cursor: pointer;
    }

    .action-button:hover {
        background: #f5f5f5;
    }

    .reply-box {
        margin: 10px 0;
        padding: 10px;
        background: #f9f9f9;
        border-radius: 4px;
    }

    .post-replies {
        margin-left: 20px;
        padding-left: 20px;
        border-left: 2px solid #ddd;
    }

    .reply {
        margin: 10px 0;
        padding: 10px;
        background: #f9f9f9;
        border-radius: 4px;
    }
`;
document.head.appendChild(forumStyles);