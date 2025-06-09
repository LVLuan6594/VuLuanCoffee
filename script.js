const chatButton = document.getElementById('chatButton');
const chatbot = document.getElementById('chatbot');
const closeChat = document.getElementById('closeChat');
const chatInput = document.getElementById('chatInput');
const chatMessages = document.getElementById('chatMessages');

// Toggle chatbot visibility
chatButton.addEventListener('click', () => {
    chatbot.classList.toggle('hidden');
    chatButton.classList.toggle('hidden');
});

closeChat.addEventListener('click', () => {
    chatbot.classList.add('hidden');
    chatButton.classList.remove('hidden');
});

// Predefined Q&A
const responses = {
    'giờ mở cửa': 'Chúng tôi mở cửa từ 7:00 sáng đến 10:00 tối hàng ngày.',
    'đặt hàng online': 'Bạn có thể đặt hàng qua website hoặc gọi 0123 456 789.',
    'menu': 'Chúng tôi có espresso, cappuccino, latte và nhiều món khác. Xem chi tiết tại phần Thực đơn.',
    'địa chỉ': 'Quán tại 123 Đường Cà Phê, Quận 1, TP.HCM.'
};

// Handle user input
chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && chatInput.value.trim()) {
        const userMessage = chatInput.value.trim().toLowerCase();
        addMessage('Bạn', userMessage);

        // Find matching response
        let response = 'Xin lỗi, tôi không hiểu câu hỏi. Vui lòng thử lại!';
        for (const key in responses) {
            if (userMessage.includes(key)) {
                response = responses[key];
                break;
            }
        }

        setTimeout(() => addMessage('Bot', response), 500);
        chatInput.value = '';
    }
});

// Add message to chat
function addMessage(sender, message) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `mb-2 ${sender === 'Bạn' ? 'text-right' : 'text-left'}`;
    messageDiv.innerHTML = `<span class="inline-block p-2 rounded ${sender === 'Bạn' ? 'bg-yellow text-white' : 'bg-gray text-white'}">${sender}: ${message}</span>`;
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}