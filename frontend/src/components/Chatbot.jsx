// components/Chatbot.jsx
import { useState, useRef, useEffect } from 'react';
import { FaRobot, FaPaperPlane, FaTimes, FaComment, FaMicrophone, FaStop } from 'react-icons/fa';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Chatbot = () => {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isRecording, setIsRecording] = useState(false);
    const [recognitionError, setRecognitionError] = useState('');
    const messagesEndRef = useRef(null);
    const inputRef = useRef(null);
    const recognitionRef = useRef(null);

    // Initialize speech recognition
    useEffect(() => {
        if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
            const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
            recognitionRef.current = new SpeechRecognition();
            recognitionRef.current.continuous = false;
            recognitionRef.current.interimResults = false;
            recognitionRef.current.lang = 'en-US';

            recognitionRef.current.onresult = (event) => {
                const transcript = event.results[0][0].transcript;
                setInput(transcript);
                setIsRecording(false);
            };

            recognitionRef.current.onerror = (event) => {
                console.error('Speech recognition error:', event.error);
                setRecognitionError(`Speech recognition error: ${event.error}`);
                setIsRecording(false);
            };

            recognitionRef.current.onend = () => {
                setIsRecording(false);
            };
        }
    }, []);

    // Initial greeting
    useEffect(() => {
        setMessages([
            {
                text: "👋 Hello! I'm your HDKI-Kenya assistant. How can I help you today?",
                sender: 'bot',
                timestamp: new Date()
            }
        ]);
    }, []);

    // Auto-scroll to bottom
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    // Focus input when chat is opened
    useEffect(() => {
        if (isOpen) {
            inputRef.current?.focus();
        }
    }, [isOpen]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!input.trim() || isLoading) return;

        const userMessage = { 
            text: input, 
            sender: 'user',
            timestamp: new Date()
        };
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);

        try {
            const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/chat/`, {
                message: input,
                history: messages.map(msg => ({
                    role: msg.sender === 'user' ? 'user' : 'assistant',
                    content: msg.text
                })).slice(-6)
            });

            if (response.data.response) {
                setMessages(prev => [...prev, { 
                    text: response.data.response, 
                    sender: 'bot',
                    timestamp: new Date()
                }]);
            }
        } catch (error) {
            setMessages(prev => [...prev, { 
                text: "😔 I apologize, but I'm having trouble connecting right now. Please try again in a moment.", 
                sender: 'bot',
                timestamp: new Date()
            }]);
            console.error('Chatbot error:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const toggleChatbot = () => {
        setIsOpen(!isOpen);
    };

    const formatTime = (date) => {
        return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSubmit(e);
        }
    };

    const toggleRecording = () => {
        if (!recognitionRef.current) {
            setMessages(prev => [...prev, { 
                text: "😔 Voice input is not supported in your browser. Please type your message instead.", 
                sender: 'bot',
                timestamp: new Date()
            }]);
            return;
        }

        if (isRecording) {
            recognitionRef.current.stop();
        } else {
            setRecognitionError('');
            recognitionRef.current.start();
            setIsRecording(true);
        }
    };

    return (
        <>
            {/* Chatbot Toggle Button */}
            {!isOpen && (
                <button
                    onClick={toggleChatbot}
                    className="fixed bottom-4 right-4 w-16 h-16 rounded-full bg-red-700 text-white flex items-center justify-center shadow-lg hover:bg-red-800 transition-all duration-200 z-50 hover:scale-110"
                    aria-label="Open chatbot"
                >
                    <FaComment size={24} />
                </button>
            )}

            {/* Chatbot Container */}
            {isOpen && (
                <div className="fixed bottom-4 right-4 w-96 h-[80vh] max-y-[600px] flex flex-col rounded-box shadow-2xl bg-base-100 border border-base-300 z-50 overflow-hidden">
                    {/* Chatbot Header */}
                    <div className="flex items-center justify-between p-4 bg-gradient-to-r from-red-700 to-red-800 text-white">
                        <div className="flex items-center gap-2">
                            <FaRobot size={20} className="animate-pulse" />
                            <h3 className="font-bold text-lg">HDKI-Kenya Assistant</h3>
                        </div>
                        <button 
                            onClick={toggleChatbot}
                            className="btn btn-ghost btn-sm btn-circle text-white hover:bg-red-900"
                        >
                            <FaTimes size={16} />
                        </button>
                    </div>

                    {/* Messages Container */}
                    <div className="flex-1 overflow-y-auto p-4 bg-base-200">
                        {messages.map((message, index) => (
                            <div 
                                key={index} 
                                className={`chat ${message.sender === 'user' ? 'chat-end' : 'chat-start'} mb-4`}
                            >
                                <div className="chat-header opacity-70 text-xs mb-1">
                                    {message.sender === 'bot' ? 'HDKI-Kenya' : 'You'}
                                    <time className="text-xs opacity-50 ml-1">
                                        {formatTime(new Date(message.timestamp))}
                                    </time>
                                </div>
                                <div 
                                    className={`chat-bubble ${
                                        message.sender === 'user' 
                                            ? 'chat-bubble-primary' 
                                            : 'bg-base-100 text-base-content'
                                    } max-w-[80%] prose prose-sm`}
                                >
                                    <ReactMarkdown
                                        components={{
                                            code({node, inline, className, children, ...props}) {
                                                const match = /language-(\w+)/.exec(className || '');
                                                return !inline && match ? (
                                                    <SyntaxHighlighter
                                                        style={vscDarkPlus}
                                                        language={match[1]}
                                                        PreTag="div"
                                                        {...props}
                                                    >
                                                        {String(children).replace(/\n$/, '')}
                                                    </SyntaxHighlighter>
                                                ) : (
                                                    <code className={className} {...props}>
                                                        {children}
                                                    </code>
                                                );
                                            }
                                        }}
                                    >
                                        {message.text}
                                    </ReactMarkdown>
                                </div>
                            </div>
                        ))}
                        {isLoading && (
                            <div className="chat chat-start">
                                <div className="chat-bubble bg-base-100 text-base-content">
                                    <span className="loading loading-dots loading-sm"></span>
                                </div>
                            </div>
                        )}
                        {recognitionError && (
                            <div className="chat chat-start">
                                <div className="chat-bubble bg-base-100 text-base-content text-error">
                                    {recognitionError}
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input Form */}
                    <form onSubmit={handleSubmit} className="p-3 border-t border-base-300 bg-base-100">
                        <div className="flex gap-2">
                            <input
                                ref={inputRef}
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyPress={handleKeyPress}
                                placeholder="Ask about karate..."
                                disabled={isLoading || isRecording}
                                className="input input-bordered flex-1 input-sm focus:outline-none focus:ring-2 focus:ring-red-700"
                            />
                            <button 
                                type="button"
                                onClick={toggleRecording}
                                className={`btn btn-ghost btn-sm ${isRecording ? 'text-red-700 animate-pulse' : 'text-gray-500'}`}
                                disabled={isLoading}
                                title={isRecording ? "Stop recording" : "Start voice input"}
                            >
                                {isRecording ? <FaStop /> : <FaMicrophone />}
                            </button>
                            <button 
                                type="submit" 
                                disabled={!input.trim() || isLoading || isRecording}
                                className="btn btn-primary btn-sm hover:bg-red-800"
                            >
                                {isLoading ? (
                                    <span className="loading loading-spinner loading-xs"></span>
                                ) : (
                                    <FaPaperPlane />
                                )}
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </>
    );
};

export default Chatbot;