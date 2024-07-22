const startScreen = document.getElementById('start-screen');
const startButton = document.getElementById('start-button');
const dontstartButton = document.getElementById('dont-start-button');
const levelSelectScreen = document.getElementById('level-select-screen');
const levelButtons = levelSelectScreen.querySelectorAll('button');
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Define level configurations
const levels = {
    1: {
        players: [
            {x: 100, y: 100, width: 32, height: 32, color: 'chocolate', message: 
            'Help me find my lost dino??'},
            {x: 200, y: 200, width: 32, height: 32, color: 'green', message:
            'lost dino!'}
        ]
    },
    2: {
        players: [
            {x: 150, y: 150, width: 32, height: 32, color: 'chocolate', message: 
            'Save me from the bullies!!!'},
            {x: 250, y: 250, width: 32, height: 32, color: 'red', message: 
            'AHHH DONT PUNCH ME PERCY OKAY IM SORRY GROVER'}
        ]
    },
    3: {
        players: [
            {x: 200, y: 100, width: 32, height: 32, color: 'chocolate', message:
            'Lets go to the arcade percy!'},
            {x: 300, y: 200, width: 32, height: 32, color: 'blue', message: 
            'ooo okay sure (go to 4723899.xyz)'}
        ]
    },
    4:{
        players: [
            {x: 120, y: 120, width: 32, height: 32, color: 'cyan', message: 
            'He steals my crayons...'},
            {x: 200, y: 190, width: 32, height: 32, color: 'magenta', message: 
            'Ooo I wanna vote for grover even tho this is pre-k'}
        ]
    },
    5: {
        players: [
            {x: 160, y: 160, width: 32, height: 32, color: 'chocolate', message: 
            'Are you going to the prom percy?'},
            {x: 260, y: 260, width: 32, height: 32, color: 'blue', message: 
            'yeah I was thinking of going with my crush? or maybe you... idk'}
        ]
    },
    6: {
        players: [
            {x: 180, y: 180, width: 32, height: 32, color: 'chocolate', 
            message: 'You clicked on Brown!'},
            {x: 280, y: 280, width: 32, height: 32, color: 'blue', 
            message: 'You clicked on Grey!'}
        ]
    },
    7: {
        players: [
            {x: 200, y: 200, width: 32, height: 32, color: 'chocolate',
            message: 'You clicked on Grover! That means you two sit together and watch the sun set.'},
            {x: 300, y: 300, width: 32, height: 32, color: 'pink', 
            message: 'You clicked on Percys crush!! that means you gave percy his first kiss'}
        ]
    },
    8: {
        players: [
            {x: 220, y: 220, width: 32, height: 32, color: 'chocolate', message: 
            'Hi its me grover and yes im so epic'},
            {x: 320, y: 320, width: 32, height: 32, color: 'blue', message:
            'your parents dont love you buy my mac and cheese'}
        ]
    }
};

// Start Button Event Listener
startButton.addEventListener('click', () => {
    startScreen.style.display = 'none';
    levelSelectScreen.style.display = 'block';
});

// Don't Start Button Event Listener
dontstartButton.addEventListener('click', () => {
    startScreen.style.display = 'none';
    levelSelectScreen.style.display = 'block';
});

// Level Button Event Listeners
levelButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        const day = event.target.getAttribute('data-day');
        startLevel(day);
    });
});

function startLevel(day) {
    levelSelectScreen.style.display = 'none';
    canvas.style.display = 'block';
    
    // Initialize level data based on the day
    if (levels[day]) {
        players = levels[day].players;
    } else {
        console.error('Invalid level:', day);
        // Optionally, handle invalid level
    }
    
    console.log(`Starting Day ${day}`);
    gameLoop();
}

function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawPlayers();
    requestAnimationFrame(gameLoop);
}

function drawPlayers() {
    players.forEach(player => {
        ctx.fillStyle = player.color;
        ctx.fillRect(player.x, player.y, player.width, player.height);
    });
}

canvas.addEventListener('click', handleCanvasClick);

function handleCanvasClick(event) {
    const rect = canvas.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    
    players.forEach(player => {
        if (mouseX >= player.x && mouseX <= player.x + player.width &&
            mouseY >= player.y && mouseY <= player.y + player.height) {
            alert(player.message);
        }
    });
}
