const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const mainGif = document.getElementById('main-gif');
const questionText = document.getElementById('questionText');

let noCount = 0;
const messages = [
    "អត់មែនទេ?",
    "គិតម្ដងទៀតមើល៍! 🥺",
    "កុំអីណា៎ សន្យាថាស្រឡាញ់ខ្លាំង!",
    "ចុះបើឲ្យញ៉ាំអីឆ្ងាញ់ៗ?",
    "បើចុច 'ទេ' ទៀត ខ្ញុំយំហើយណា...",
    "ចប់ហើយ... ចុច 'យល់ព្រម' ទៅ! 😭"
];

noBtn.addEventListener('click', () => {
    noCount++;
    
    // បង្កើនទំហំ Button Yes រាល់ពេលចុច No
    const newSize = 1.2 + (noCount * 0.5);
    yesBtn.style.transform = `scale(${newSize})`;
    
    // រុញ Button No ទៅមកតិចៗ (Animation)
    noBtn.style.transform = `translateX(${Math.random() * 20 - 10}px)`;
    
    // ប្តូរអត្ថបទលើ Button No
    if (noCount < messages.length) {
        noBtn.innerText = messages[noCount];
    } else {
        noBtn.innerText = "អត់មានផ្លូវទេ! ចុច Yes ទៅ!";
    }
});

yesBtn.addEventListener('click', () => {
    // ប្តូររូបភាព និងអត្ថបទពេលជោគជ័យ
    questionText.innerText = "យេ! ស្រឡាញ់បំផុត! ចាំជួបគ្នាណា! 💖💋";
    mainGif.src = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM2ZicnZueXp6eXp6eXp6eXp6eXp6eXp6eXp6eXp6eXp6eXp6JmVwPXYxX2ludGVybmFsX2dpZl9ieV9pZCZjdD1z/T866TiLAn99iL5lY4y/giphy.gif";
    
    // លាក់ Button No
    noBtn.style.display = 'none';
    yesBtn.style.transform = 'scale(1)';
    yesBtn.innerText = "Happy Valentine's Day!";
});