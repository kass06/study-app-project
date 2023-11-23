document.addEventListener("DOMContentLoaded", function () {
    const subjectList = document.getElementById("subject-list");
    const topicList = document.getElementById("topic-list");

    const subjects = [
        { id: 1, name: "Mathematics", topics: ["Algebra", "Geometry", "Calculus"] },
        { id: 2, name: "Science", topics: ["Physics", "Chemistry", "Biology"] },
        { id: 3, name: "History", topics: ["Ancient History", "World Wars", "Modern History"] },
        {id: 4,  name:  "English", topics: ["Litriture", "Language", "Creative Writing"] },
    ];

    subjects.forEach(subject => {
        const li = document.createElement("li");
        li.textContent = subject.name;
        li.addEventListener("click", () => displayTopics(subject.topics));
        subjectList.appendChild(li);
    });

    function displayTopics(topics) {
        topicList.innerHTML = ""; // Clear previous topics

        topics.forEach(topic => {
            const li = document.createElement("li");
            const button = document.createElement("button");
            button.textContent = "Mark as Completed";
            button.addEventListener("click", () => markCompleted(topic));

            li.textContent = topic;
            li.appendChild(button);

            topicList.appendChild(li);
        });
    }

    function markCompleted(topic) {
        alert(`You marked "${topic}" as completed!`);
        // You can add more functionality here, such as updating a database or changing the appearance of the completed topic.
    }
});
