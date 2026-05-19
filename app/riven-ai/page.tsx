"use client";
import React, { useEffect, useRef, useCallback, useTransition, useState } from "react";
import { Plus, Mic, AudioLines, Image as ImageIcon, SquarePen, ArrowUp, PanelRightClose, PanelRightOpen, Search, ChevronDown, FolderInput, FolderClosed, Settings, X, Lightbulb, SmilePlus, SquareTerminal, History, MessageCircle, MoreHorizontal, Share, UserPlus, Pencil, Folder, ChevronRight, Pin, Archive, Trash2, FileUp, Figma, MonitorIcon, CircleUserRound, ArrowUpIcon, Paperclip, PlusIcon, SendIcon, XIcon, LoaderIcon, Sparkles, Command } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter, CardAction } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { motion, AnimatePresence, Reorder } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface UseAutoResizeTextareaProps {
    minHeight: number;
    maxHeight?: number;
}

function useAutoResizeTextarea({
    minHeight,
    maxHeight,
}: UseAutoResizeTextareaProps) {
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    const adjustHeight = useCallback(
        (reset?: boolean) => {
            const textarea = textareaRef.current;
            if (!textarea) return;

            if (reset) {
                textarea.style.height = `${minHeight}px`;
                return;
            }

            textarea.style.height = `${minHeight}px`;
            const newHeight = Math.max(
                minHeight,
                Math.min(
                    textarea.scrollHeight,
                    maxHeight ?? Number.POSITIVE_INFINITY
                )
            );

            textarea.style.height = `${newHeight}px`;
        },
        [minHeight, maxHeight]
    );

    useEffect(() => {
        const textarea = textareaRef.current;
        if (textarea) {
            textarea.style.height = `${minHeight}px`;
        }
    }, [minHeight]);

    useEffect(() => {
        const handleResize = () => adjustHeight();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [adjustHeight]);

    return { textareaRef, adjustHeight };
}

function TypingDots() {
    return (
        <div className="flex items-center ml-1">
            {[1, 2, 3].map((dot) => (
                <motion.div
                    key={dot}
                    className="w-1.5 h-1.5 bg-white/90 rounded-full mx-0.5"
                    initial={{ opacity: 0.3 }}
                    animate={{ 
                        opacity: [0.3, 0.9, 0.3],
                        scale: [0.85, 1.1, 0.85]
                    }}
                    transition={{
                        duration: 1.2,
                        repeat: Infinity,
                        delay: dot * 0.15,
                        ease: "easeInOut",
                    }}
                    style={{
                        boxShadow: "0 0 4px rgba(255, 255, 255, 0.3)"
                    }}
                />
            ))}
        </div>
    );
}

const RivenAI = () => {
    const [inputValue, setInputValue] = useState("");
    const [attachments, setAttachments] = useState<string[]>([]);
    const [isTyping, setIsTyping] = useState(false);
    const [isPending, startTransition] = useTransition();
    const [recentCommand, setRecentCommand] = useState<string | null>(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const { textareaRef, adjustHeight } = useAutoResizeTextarea({
        minHeight: 60,
        maxHeight: 200,
    });
    const [inputFocused, setInputFocused] = useState(false);


    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [isProjectsOpen, setIsProjectsOpen] = useState(true);
    const [isRecentOpen, setIsRecentOpen] = useState(true);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [projects, setProjects] = useState([
        { name: "Riven", chats: [] as any[] },
        { name: "My Tech Studio", chats: [] as any[] },
        { name: "ServiceNow University", chats: [] as any[] },
    ]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newProjectName, setNewProjectName] = useState("");
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [chatToDelete, setChatToDelete] = useState<string | null>(null);
    const [openMenuId, setOpenMenuId] = useState<string | null>(null);
    const [menuPosition, setMenuPosition] = useState<{ top: number, left: number } | null>(null);
    const [draggedChat, setDraggedChat] = useState<any | null>(null);
    const [expandedProjects, setExpandedProjects] = useState<Set<string>>(new Set());

    const toggleProject = (name: string) => {
        setExpandedProjects(prev => {
            const next = new Set(prev);
            if (next.has(name)) next.delete(name);
            else next.add(name);
            return next;
        });
    };

    const [chats, setChats] = useState([
        { question: "Warp landing page code" },
        { question: "SVG Icon References" },
        
    ]);

    const handleDeleteChat = () => {
        if (chatToDelete) {
            setChats(prev => prev.filter(c => c.question !== chatToDelete));
            setIsDeleteModalOpen(false);
            setChatToDelete(null);
        }
    };

    const handleMoveToProject = (chat: any, projectName: string) => {
        setProjects(prev => prev.map(p => 
            p.name === projectName 
                ? { ...p, chats: [...(p.chats || []), chat] }
                : p
        ));
        setChats(prev => prev.filter(c => c.question !== chat.question));
    };

    const handleDragEnd = (event: any, info: any, chat: any) => {
        setDraggedChat(null);
        // Detect if dropped over projects section
        const projectsElement = document.getElementById('projects-list');
        if (!projectsElement) return;

        const rect = projectsElement.getBoundingClientRect();
        if (info.point.y >= rect.top && info.point.y <= rect.bottom) {
            // Find which project
            const projectItems = projectsElement.querySelectorAll('.project-item');
            projectItems.forEach((item, index) => {
                const itemRect = item.getBoundingClientRect();
                if (info.point.y >= itemRect.top && info.point.y <= itemRect.bottom) {
                    handleMoveToProject(chat, sortedProjects[index].name);
                }
            });
        }
    };

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => setMousePosition({ x: e.clientX, y: e.clientY });
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    useEffect(() => {
        const handleScroll = () => setOpenMenuId(null);
        const sidebarNav = document.getElementById('sidebar-nav');
        if (sidebarNav) sidebarNav.addEventListener('scroll', handleScroll);
        return () => {
            if (sidebarNav) sidebarNav.removeEventListener('scroll', handleScroll);
        };
    }, [openMenuId]);

    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        }
    };

    const handleSendMessage = () => {
        if (inputValue.trim()) {
            setIsTyping(true);
            setTimeout(() => {
                setIsTyping(false);
                setInputValue("");
                adjustHeight(true);
            }, 3000);
        }
    };

    const handleAttachFile = () => {
        setAttachments(prev => [...prev, `file-${Math.floor(Math.random() * 1000)}.pdf`]);
    };

    const removeAttachment = (index: number) => setAttachments(prev => prev.filter((_, i) => i !== index));

    const allChats = React.useMemo(() => [
        { title: "What is React?", category: "Previous" },
        { title: "Explain Tailwind CSS", category: "Previous" },
    ], []);

    const filteredChats = React.useMemo(() => {
        if (!searchQuery) return allChats;
        return allChats.filter(chat => chat.title.toLowerCase().includes(searchQuery.toLowerCase()));
    }, [searchQuery, allChats]);


  const sortedProjects = React.useMemo(() => {
    return [...projects].sort((a, b) => a.name.localeCompare(b.name));
  }, [projects]);

  const handleCreateProject = () => {
    if (newProjectName) {
      setProjects([...projects, { name: newProjectName, chats: [] }]);
      setNewProjectName("");
      setIsModalOpen(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  React.useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [inputValue]);

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsSearchOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="bg-chatblack-50 h-screen overflow-hidden">
      <div className="flex h-full text-white relative">
        {/* Sidebar Toggle Button (Floating when closed) */}
        {!isSidebarOpen && (
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsSidebarOpen(true)}
            className="absolute top-4 left-4 z-50 hover:bg-gray-700"
          >
            <PanelRightOpen className="h-6 w-6" />
          </Button>
        )}

        {/* Sidebar Overlay for Mobile */}
        {isSidebarOpen && (
          <div 
            className="fixed inset-0 bg-black/50 z-30 md:hidden backdrop-blur-sm"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        {/* Left Sidebar */}
        <div className={`fixed inset-y-0 left-0 z-40 md:static bg-[#000000] border-r border-white/15 transition-all duration-300 flex flex-col ${isSidebarOpen ? 'w-[280px]' : 'w-0 overflow-hidden'}`}>
          <div className="w-full flex justify-end p-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsSidebarOpen(false)}
              className="hover:bg-gray-700"
            >
              <PanelRightClose className="h-5 w-5" />
            </Button>
          </div>

          <nav id="sidebar-nav" className="flex-1 overflow-y-auto custom-scrollbar [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-white/10 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-white/20 pb-8">
            <Button
              tabIndex={0}
              className="group flex items-center justify-between w-[90%] mx-auto mt-4 px-3 py-2 rounded-full bg-transparent hover:bg-white/10 transition-all text-sm text-gray-300 border border-transparent hover:border-white/5"
            >
            <div className="flex min-w-0 items-center gap-1.5">
              <div className="flex items-center justify-center opacity-70 group-hover:opacity-100 transition-opacity">
                <SquarePen className="h-4 w-4" />
              </div>
              <div className="flex min-w-0 grow items-center gap-2.5">
                <div className="truncate text-[13px]">New Chat</div>
              </div>
            </div>
          </Button>

          <Button
            onClick={() => setIsSearchOpen(true)}
            tabIndex={0}
            className="group flex items-center justify-between w-[90%] mx-auto mt-4 px-3 py-2 rounded-full bg-transparent hover:bg-white/10 transition-all text-sm text-gray-300 border border-transparent hover:border-white/5"
          >
            <div className="flex min-w-0 items-center gap-1.5">
              <div className="flex items-center justify-center opacity-70 group-hover:opacity-100 transition-opacity">
                <Search className="h-4 w-4" />
              </div>
              <div className="flex min-w-0 grow items-center gap-2.5">
                <div className="truncate text-[13px]">Search chats</div>
              </div>
            </div>
          </Button>

          <Button
            tabIndex={0}
            className="group flex items-center justify-between w-[90%] mx-2 mt-4 px-3 py-2 rounded-full bg-transparent hover:bg-white/10 transition-all text-sm text-gray-300 border border-transparent hover:border-white/5"
          >
            <div className="flex min-w-0 items-center gap-1.5">
              <div className="flex items-center justify-center opacity-70 group-hover:opacity-100 transition-opacity">
                <SquareTerminal className="h-4 w-4" />
              </div>
              <div className="flex min-w-0 grow items-center gap-2.5">
                <div className="truncate text-[13px]">Coding Agent</div>
              </div>
            </div>
          </Button>



 
        <Button
            onClick={() => setIsProjectsOpen(!isProjectsOpen)}
            className="group flex items-center justify-between w-[90%] mx-auto mt-4 px-3 py-2 rounded-full bg-transparent hover:bg-white/10 transition-all text-sm text-gray-300 border border-transparent hover:border-white/5"
          >
            <div className="flex min-w-0 items-center gap-1.5">
              <div className="flex items-center justify-center opacity-70 group-hover:opacity-100 transition-opacity">
                <ChevronDown className={`h-4 w-4 transition-transform ${isProjectsOpen ? '' : '-rotate-90'}`} />
              </div>
              <div className="flex min-w-0 grow items-center gap-2.5">
                <div className="truncate text-[13px]">Projects</div>
              </div>
            </div>
            
          </Button>

          {isProjectsOpen && (
            <div id="projects-list" className="w-[90%] mx-auto mt-1 space-y-0.5">
                <Button 
                  variant="ghost"
                  onClick={() => setIsModalOpen(true)}
                  className="w-full flex items-center justify-start gap-3 px-2 py-2 hover:bg-white/5 rounded-lg cursor-pointer group transition-all h-auto text-gray-300 hover:text-white border-none"
                >
                  <FolderInput className="h-4 w-4 text-gray-400 group-hover:text-gray-200" />
                  <span className="text-[13px]">New project</span>
                </Button>
                {sortedProjects.map((project, index) => (
                  <div key={index} className="project-item space-y-1">
                    <div className="flex items-center group">
                      <Button 
                        variant="ghost"
                        onClick={() => toggleProject(project.name)}
                        className="flex-1 flex items-center justify-start gap-2 px-2 py-2 hover:bg-white/5 rounded-lg cursor-pointer transition-all h-auto text-gray-300 hover:text-white border-none"
                      >
                        <ChevronRight className={`h-3.5 w-3.5 text-gray-500 transition-transform ${expandedProjects.has(project.name) ? 'rotate-90' : ''}`} />
                        <FolderClosed className="h-4 w-4 text-gray-400 group-hover:text-gray-200" />
                        <span className="text-[13px]">{project.name}</span>
                      </Button>
                      <button className="p-1.5 opacity-0 group-hover:opacity-100 hover:bg-white/10 rounded-md transition-all">
                        <MoreHorizontal className="h-4 w-4 text-gray-500" />
                      </button>
                    </div>

                    {expandedProjects.has(project.name) && project.chats && project.chats.length > 0 && (
                      <div className="pl-8 space-y-1 border-l border-white/5 ml-4">
                        {project.chats.map((chat, cIdx) => (
                          <div key={cIdx} className="text-[12px] text-gray-500 hover:text-white py-1 cursor-pointer truncate flex items-center gap-2 group/chat">
                            <MessageCircle className="h-3 w-3 opacity-0 group-hover/chat:opacity-100 transition-opacity" />
                            {chat.question}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
              
            )}
          
          <button
            onClick={() => setIsRecentOpen(!isRecentOpen)}
            className="w-full flex items-center justify-start gap-1 px-5 py-2 mt-4 text-[13px] font-medium text-gray-400 hover:text-white transition-colors"
          >
            <span>Recents</span>
            <ChevronDown className={`h-3 w-3 transition-transform ${isRecentOpen ? '' : '-rotate-90'}`} />
          </button>

          {isRecentOpen && (
            <Reorder.Group 
              axis="y" 
              values={chats} 
              onReorder={setChats}
              className="w-[90%] mx-auto mt-1 space-y-0.5"
            >
              {chats.map((chat) => (
                <Reorder.Item 
                  key={chat.question} 
                  value={chat}
                  className="relative group/item active:scale-[0.98] transition-transform z-10"
                  onDragStart={() => setDraggedChat(chat)}
                  whileDrag={{ 
                    opacity: 0.4,
                    cursor: "grabbing"
                  }}
                  onDragEnd={(event, info) => handleDragEnd(event, info, chat)}
                >
                  <Button 
                    variant="ghost"
                    className="w-full flex items-center justify-start px-3 py-2 hover:bg-white/5 rounded-lg cursor-pointer group transition-all h-auto text-gray-300 hover:text-white border-none pr-10"
                  >
                    <span className="text-[13px] truncate">{chat.question}</span>
                  </Button>

                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      const rect = e.currentTarget.getBoundingClientRect();
                      setMenuPosition({ top: rect.top, left: rect.right + 8 });
                      setOpenMenuId(openMenuId === `sidebar-${chat.question}` ? null : `sidebar-${chat.question}`);
                    }}
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-1 hover:bg-white/10 rounded-md text-gray-400 hover:text-white transition-all opacity-100 md:opacity-0 group-hover/item:md:opacity-100"
                  >
                    <MoreHorizontal className="h-4 w-4" />
                  </button>

                  {openMenuId === `sidebar-${chat.question}` && (
                    <>
                      <div 
                        className="fixed inset-0 z-[120]" 
                        onClick={() => setOpenMenuId(null)}
                      />
                      <div 
                        className="fixed bg-[#000000]/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl z-[999] py-2 overflow-hidden w-52"
                        style={{ 
                          top: menuPosition ? `${menuPosition.top}px` : '0px', 
                          left: menuPosition ? `${menuPosition.left}px` : '0px' 
                        }}
                      >
                        <button className="w-full flex items-center gap-3 px-3 py-2.5 text-sm text-gray-200 hover:bg-white/10 transition-colors">
                          <Share className="h-4 w-4" />
                          <span>Share</span>
                        </button>
                        <button className="w-full flex items-center gap-3 px-3 py-2.5 text-sm text-gray-200 hover:bg-white/10 transition-colors">
                          <UserPlus className="h-4 w-4" />
                          <span>Start a group chat</span>
                        </button>
                        <button className="w-full flex items-center gap-3 px-3 py-2.5 text-sm text-gray-200 hover:bg-white/10 transition-colors">
                          <Pencil className="h-4 w-4" />
                          <span>Rename</span>
                        </button>
                        <button className="w-full flex items-center justify-between px-3 py-2.5 text-sm text-gray-200 hover:bg-white/10 transition-colors">
                          <div className="flex items-center gap-3">
                            <Folder className="h-4 w-4" />
                            <span>Move to project</span>
                          </div>
                          <ChevronRight className="h-4 w-4 text-gray-500" />
                        </button>
                        
                        <div className="px-3 py-1">
                          <Separator className="bg-white/5" />
                        </div>

                        <button className="w-full flex items-center gap-3 px-3 py-2.5 text-sm text-gray-200 hover:bg-white/10 transition-colors">
                          <Pin className="h-4 w-4" />
                          <span>Pin chat</span>
                        </button>
                        <button className="w-full flex items-center gap-3 px-3 py-2.5 text-sm text-gray-200 hover:bg-white/10 transition-colors">
                          <Archive className="h-4 w-4" />
                          <span>Archive</span>
                        </button>
                         <button 
                           onClick={() => {
                             setChatToDelete(chat.question);
                             setIsDeleteModalOpen(true);
                             setOpenMenuId(null);
                           }}
                           className="w-full flex items-center gap-3 px-3 py-2.5 text-sm text-red-400 hover:bg-red-500/10 transition-colors"
                         >
                           <Trash2 className="h-4 w-4" />
                           <span>Delete</span>
                         </button>
                      </div>
                    </>
                  )}
                </Reorder.Item>
              ))}
            </Reorder.Group>
          )}
          </nav>
        </div>

        <div className={`flex-1 transition-all duration-300 flex flex-col relative overflow-hidden ${!isSidebarOpen ? 'w-full' : ''}`}>
          {/* Animated Background Glows */}
          <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-500/5 rounded-full mix-blend-normal filter blur-[128px] animate-pulse" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/5 rounded-full mix-blend-normal filter blur-[128px] animate-pulse delay-700" />
          </div>

          <div className="flex-1 flex flex-col items-center justify-center w-full max-w-3xl mx-auto px-4 relative z-10">
            {/* Splash Headline */}
            <div className="text-center mb-12 transition-all duration-700 ease-in-out">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-block"
              >
                <h1 className="text-3xl md:text-4xl font-medium tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white/90 to-white/40 pb-2 font-serif">
                  How can I help today?
                </h1>
                <motion.div 
                  className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: "100%", opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                />
              </motion.div>
            </div>

            {/* Premium Animated Search Bar */}
            <motion.div 
              className="w-full relative backdrop-blur-2xl bg-white/[0.02] rounded-2xl border border-white/[0.05] shadow-2xl transition-all"
              initial={{ scale: 0.98, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <div className="p-4">
                <textarea 
                  ref={textareaRef}
                  value={inputValue}
                  onChange={(e) => {
                    setInputValue(e.target.value);
                    adjustHeight();
                  }}
                  onKeyDown={handleKeyDown}
                  onFocus={() => setInputFocused(true)}
                  onBlur={() => setInputFocused(false)}
                  placeholder="Ask a question..."
                  className="w-full resize-none bg-transparent py-3 px-2 text-[16px] outline-none placeholder:text-white/20 text-white max-h-[200px] overflow-hidden transition-all"
                />
              </div>

              <AnimatePresence>
                {attachments.length > 0 && (
                  <motion.div 
                    className="px-4 pb-3 flex gap-2 flex-wrap"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                  >
                    {attachments.map((file, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center gap-2 text-xs bg-white/[0.03] py-1.5 px-3 rounded-lg text-white/70"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                      >
                        <span>{file}</span>
                        <button 
                          onClick={() => removeAttachment(index)}
                          className="text-white/40 hover:text-white transition-colors"
                        >
                          <XIcon className="w-3 h-3" />
                        </button>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="p-4 border-t border-white/[0.05] flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                </div>
                
                <motion.button
                  type="button"
                  onClick={handleSendMessage}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isTyping || !inputValue.trim()}
                  className={cn(
                    "px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2",
                    inputValue.trim()
                      ? "bg-white text-[#0A0A0B] shadow-lg shadow-white/10"
                      : "bg-white/[0.05] text-white/40"
                  )}
                >
                  {isTyping ? (
                    <LoaderIcon className="w-4 h-4 animate-spin" />
                  ) : (
                    <SendIcon className="w-4 h-4" />
                  )}
                  <span>Send</span>
                </motion.button>
              </div>
            </motion.div>

          </div>

          {/* Thinking Overlay */}
          <AnimatePresence>
            {isTyping && (
              <motion.div 
                className="fixed bottom-24 left-1/2 -translate-x-1/2 backdrop-blur-2xl bg-white/[0.02] rounded-full px-4 py-2 shadow-lg border border-white/[0.05] z-50"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-7 rounded-full bg-white/[0.05] flex items-center justify-center text-center">
                    <span className="text-xs font-serif text-white/90 mb-0.5">Riven</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-white/70">
                    <span>Thinking</span>
                    <TypingDots />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Mouse Glow */}
          {inputFocused && (
            <motion.div 
              className="fixed w-[50rem] h-[50rem] rounded-full pointer-events-none z-0 opacity-[0.02] bg-gradient-to-r from-violet-500 via-fuchsia-500 to-indigo-500 blur-[96px]"
              animate={{
                x: mousePosition.x - 400,
                y: mousePosition.y - 400,
              }}
              transition={{
                type: "spring",
                damping: 25,
                stiffness: 150,
                mass: 0.5,
              }}
            />
          )}

          {/* Footer Disclaimer */}
          <div className="mt-auto pb-8 text-xs text-center text-gray-500 max-w-2xl px-4 items-center justify-center flex  ">
            Free Research Preview. Riven may produce inaccurate information about people, places, or facts. 
            <a className="underline hover:text-gray-400 ml-1" href="https://help.openai.com/en/articles/6825453-chatgpt-release-notes">Riven AI Version 2026</a>
          </div>
        </div>

        {/* Delete Confirmation Modal */}
        <AnimatePresence>
          {isDeleteModalOpen && (
            <div className="fixed inset-0 z-[2000] flex items-end sm:items-center justify-center sm:p-4">
              <motion.div 
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsDeleteModalOpen(false)}
              />
              <motion.div 
                className="w-full sm:max-w-sm bg-[#171717] border-t sm:border border-white/10 rounded-t-[24px] sm:rounded-[24px] shadow-2xl z-[2001] p-6 pb-10 sm:pb-6"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 100 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
              >
                <div className="w-12 h-1.5 bg-white/10 rounded-full mx-auto mb-6 sm:hidden" />
                <h3 className="text-[20px] font-medium text-white mb-4">Delete chat?</h3>
                <p className="text-[15px] text-gray-300 mb-8 leading-relaxed">
                  This will delete <span className="font-bold text-white">{chatToDelete}</span>. 
                  Visit <span className="underline cursor-pointer hover:text-white transition-colors">settings</span> to delete any memories saved during this chat.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-end gap-3">
                  <button 
                    onClick={() => setIsDeleteModalOpen(false)}
                    className="w-full sm:w-auto order-2 sm:order-1 px-6 py-3 sm:py-2.5 rounded-full bg-[#2F2F2F] hover:bg-[#3F3F3F] text-white text-sm font-medium transition-all"
                  >
                    Cancel
                  </button>
                  <button 
                    onClick={handleDeleteChat}
                    className="w-full sm:w-auto order-1 sm:order-2 px-6 py-3 sm:py-2.5 rounded-full bg-[#D92D20] hover:bg-[#B91C1C] text-white text-sm font-medium transition-all"
                  >
                    Delete
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* Create Project Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">
            <Card className="w-full max-w-[500px] bg-[#2D2D2D] text-white border-white/10 shadow-2xl">
              <CardHeader className="border-b-0">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-xl font-semibold">Create project</CardTitle>
                  <CardAction className="flex gap-4 text-gray-400">
                    <Settings className="h-5 w-5 cursor-pointer hover:text-white" />
                    <X className="h-5 w-5 cursor-pointer hover:text-white" onClick={() => setIsModalOpen(false)} />
                  </CardAction>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6 pt-2">
                <div className="space-y-2">
                  <Label htmlFor="projectName" className="text-sm font-medium text-gray-300">Project name</Label>
                  <div className="relative">
                    <SmilePlus className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
                    <Input 
                      id="projectName"
                      autoFocus
                      value={newProjectName}
                      onChange={(e) => setNewProjectName(e.target.value)}
                      placeholder="Copenhagen Trip"
                      className="bg-transparent border-gray-600 rounded-xl py-6 pl-12 focus-visible:ring-white/20 transition-colors placeholder:text-gray-500"
                      onKeyDown={(e) => e.key === 'Enter' && handleCreateProject()}
                    />
                  </div>
                </div>

                <div className="bg-white/5 rounded-xl p-4 flex gap-4">
                  <Lightbulb className="h-6 w-6 text-gray-400 shrink-0" />
                  <p className="text-sm text-gray-300 leading-relaxed">
                    Projects keep chats, files, and custom instructions in one place. Use them for ongoing work, or just to keep things tidy.
                  </p>
                </div>
              </CardContent>

              <CardFooter className="flex justify-end border-t-0 bg-transparent pt-0 pb-6">
                <Button 
                  onClick={handleCreateProject}
                  disabled={!newProjectName}
                  className={`rounded-full px-8 py-6 text-sm font-medium transition-all ${
                    newProjectName 
                    ? 'bg-white text-black hover:bg-gray-200' 
                    : 'bg-white/10 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  Create project
                </Button>
              </CardFooter>
            </Card>
          </div>
        )}
      {/* Search Chats Modal */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center bg-black/60 backdrop-blur-sm px-4 md:px-0">
          <div className="w-full max-w-[640px] bg-[#2D2D2D] text-white border border-white/10 shadow-2xl rounded-2xl overflow-hidden flex flex-col max-h-[80vh]">
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
              <div className="flex items-center gap-3 flex-1">
                <input 
                  autoFocus
                  type="text" 
                  placeholder="Search chats..." 
                  className="bg-transparent border-none focus:outline-none text-[15px] w-full placeholder:text-gray-500 text-gray-200"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <X 
                className="h-5 w-5 cursor-pointer text-gray-500 hover:text-white transition-colors" 
                onClick={() => setIsSearchOpen(false)} 
              />
            </div>

            {/* Content with Scrollbar */}
            <div className="flex-1 overflow-y-auto p-2 space-y-4 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-white/10 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-white/20">
              {/* New Chat Button */}
              <button className="w-full flex items-center gap-3 p-3 hover:bg-white/5 rounded-xl transition-all group text-left">
                <SquarePen className="h-4 w-4 text-gray-400 group-hover:text-white transition-colors" />
                <span className="text-sm font-medium text-gray-200 group-hover:text-white">New chat</span>
              </button>

              {/* Categories */}
              <div className="space-y-6">
                {filteredChats.length > 0 ? (
                  Object.entries(
                    filteredChats.reduce((acc, chat) => {
                      if (!acc[chat.category]) acc[chat.category] = [];
                      acc[chat.category].push(chat);
                      return acc;
                    }, {} as Record<string, typeof allChats>)
                  ).map(([category, chats]) => (
                    <div key={category} className="space-y-1">
                      <h3 className="px-3 text-[12px] font-semibold text-gray-500">{category}</h3>
                      {chats.map((chat, idx) => (
                        <button key={idx} className="w-full flex items-center gap-3 p-3 hover:bg-white/5 rounded-xl transition-all group text-left">
                          <MessageCircle className="h-4 w-4 text-gray-400 group-hover:text-white transition-colors shrink-0" />
                          <span className="text-sm text-gray-200 group-hover:text-white truncate">{chat.title}</span>
                        </button>
                      ))}
                    </div>
                  ))
                ) : (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <Search className="h-4 w-4 text-gray-400 group-hover:text-gray-200" />
                    <p className="text-gray-400 text-sm">No chats found for "{searchQuery}"</p>
                   
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
      </div>
      {/* Drag Ghost Proxy */}
      <AnimatePresence>
        {draggedChat && (
          <motion.div 
            className="fixed pointer-events-none z-[5000] bg-[#171717]/90 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10 shadow-2xl"
            style={{ 
              left: mousePosition.x, 
              top: mousePosition.y, 
              x: 20, 
              y: -20 
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
          >
            <div className="flex items-center gap-2">
              <MessageCircle className="h-4 w-4 text-gray-400" />
              <span className="text-[14px] text-white font-medium whitespace-nowrap">
                {draggedChat.question}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>

  );
};

export default RivenAI;