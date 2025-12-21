import React, { useState, useEffect } from 'react';
import { User, Post } from '../types';
import { Trash2, PenTool, LogIn, LogOut, X, User as UserIcon, Loader2, AlertTriangle } from 'lucide-react';
import { db } from '../firebaseConfig';
import { collection, addDoc, onSnapshot, query, orderBy, deleteDoc, doc } from 'firebase/firestore';

interface CommunityProps {
  user: User | null;
  onLogin: (user: User) => void;
  onLogout: () => void;
}

const Community: React.FC<CommunityProps> = ({ user, onLogin, onLogout }) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isWriting, setIsWriting] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  // Login Form State
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  // Write Form State
  const [newTitle, setNewTitle] = useState('');
  const [newContent, setNewContent] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Subscribe to Firestore updates
  useEffect(() => {
    try {
      const q = query(collection(db, "posts"), orderBy("createdAt", "desc"));
      
      const unsubscribe = onSnapshot(q, 
        (snapshot) => {
          const loadedPosts = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
          })) as Post[];
          setPosts(loadedPosts);
          setIsLoading(false);
          setError(null);
        },
        (err) => {
          console.error("Firestore Error:", err);
          setError("데이터베이스 연결에 실패했습니다. API 키를 확인해주세요.");
          setIsLoading(false);
        }
      );

      return () => unsubscribe();
    } catch (err) {
      console.error("Setup Error:", err);
      setError("Firebase 설정이 올바르지 않습니다.");
      setIsLoading(false);
    }
  }, []);

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple Mock Authentication for now
    if (username === 'admin' && password === 'Sarang77?') {
      onLogin({ username: 'Admin', isAdmin: true });
      setIsLoginModalOpen(false);
      setLoginError('');
    } else if (username === 'user' && password === '1234') {
      onLogin({ username: 'Member', isAdmin: false });
      setIsLoginModalOpen(false);
      setLoginError('');
    } else {
      setLoginError('아이디 또는 비밀번호가 틀렸습니다.');
    }
  };

  const handlePostSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim() || !newContent.trim() || !user) return;

    setIsSubmitting(true);
    try {
      await addDoc(collection(db, "posts"), {
        title: newTitle,
        content: newContent,
        author: user.username,
        date: new Date().toLocaleDateString(),
        createdAt: Date.now()
      });

      // Reset form
      setNewTitle('');
      setNewContent('');
      setIsWriting(false);
    } catch (err) {
      alert("글 작성에 실패했습니다. (권한 문제 혹은 네트워크 오류)");
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('정말 이 게시글을 삭제하시겠습니까? (Delete this post?)')) {
      try {
        await deleteDoc(doc(db, "posts", id));
      } catch (err) {
        alert("삭제에 실패했습니다.");
        console.error(err);
      }
    }
  };

  return (
    <div className="pb-24 px-6 pt-8 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-start mb-6">
        <div>
          <h1 className="text-2xl font-serif font-bold text-gray-900 mb-1">나눔터</h1>
          <h2 className="text-sm font-serif text-gray-600 uppercase tracking-widest">Community Board</h2>
        </div>
        <div>
          {user ? (
            <div className="flex items-center gap-2">
              <span className="text-xs text-wccw-purple font-bold flex items-center gap-1">
                <UserIcon size={12} /> {user.username}
              </span>
              <button 
                onClick={onLogout}
                className="bg-gray-200 p-2 rounded-full text-gray-600 hover:bg-gray-300 transition-colors"
                title="로그아웃"
              >
                <LogOut size={16} />
              </button>
            </div>
          ) : (
            <button 
              onClick={() => setIsLoginModalOpen(true)}
              className="bg-wccw-purple text-white px-4 py-2 rounded-full text-xs font-bold flex items-center gap-2 hover:bg-purple-800 transition-colors shadow-sm"
            >
              <LogIn size={14} /> 로그인 (Login)
            </button>
          )}
        </div>
      </div>

      {/* Error Message */}
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-600 p-4 rounded-xl mb-6 flex items-start gap-3 text-sm">
          <AlertTriangle className="shrink-0 mt-0.5" size={16} />
          <div>
            <p className="font-bold">연결 오류</p>
            <p>{error}</p>
            <p className="text-xs mt-1 text-red-400">firebaseConfig.ts 파일에 유효한 API Key를 입력했는지 확인해주세요.</p>
          </div>
        </div>
      )}

      {/* Write Button or Form */}
      {isWriting ? (
        <div className="bg-white p-5 rounded-xl shadow-md border border-purple-100 mb-6 animate-fade-in">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-gray-800">글쓰기 (Write Post)</h3>
            <button onClick={() => setIsWriting(false)} className="text-gray-400 hover:text-gray-600">
              <X size={20} />
            </button>
          </div>
          <form onSubmit={handlePostSubmit} className="space-y-4">
            <input 
              type="text" 
              placeholder="제목 (Title)" 
              className="w-full border border-gray-200 rounded-lg p-3 text-sm focus:outline-none focus:border-wccw-purple focus:ring-1 focus:ring-wccw-purple"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              required
            />
            <textarea 
              placeholder="내용을 입력하세요... (Content)" 
              className="w-full border border-gray-200 rounded-lg p-3 text-sm h-32 focus:outline-none focus:border-wccw-purple focus:ring-1 focus:ring-wccw-purple resize-none"
              value={newContent}
              onChange={(e) => setNewContent(e.target.value)}
              required
            />
            <button 
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-wccw-purple text-white py-3 rounded-lg font-bold text-sm hover:bg-purple-800 transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {isSubmitting && <Loader2 size={16} className="animate-spin" />}
              {isSubmitting ? '등록 중...' : '등록하기 (Post)'}
            </button>
          </form>
        </div>
      ) : (
        <button 
          onClick={() => user ? setIsWriting(true) : setIsLoginModalOpen(true)}
          disabled={!!error}
          className="w-full bg-white border border-dashed border-wccw-purple text-wccw-purple p-4 rounded-xl mb-6 flex items-center justify-center gap-2 hover:bg-purple-50 transition-colors font-bold text-sm disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <PenTool size={16} /> 글쓰기 (Write a Post)
        </button>
      )}

      {/* Login Modal */}
      {isLoginModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl w-full max-w-sm p-6 shadow-2xl animate-fade-in relative">
            <button 
              onClick={() => { setIsLoginModalOpen(false); setLoginError(''); }}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <X size={20} />
            </button>
            <h3 className="text-xl font-bold text-gray-800 mb-1 text-center">로그인</h3>
            <p className="text-xs text-gray-500 text-center mb-6">Login to write posts</p>
            
            <form onSubmit={handleLoginSubmit} className="space-y-4">
              <div>
                <input 
                  type="text" 
                  placeholder="아이디 (ID)" 
                  className="w-full border border-gray-300 rounded-lg p-3 text-sm"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div>
                <input 
                  type="password" 
                  placeholder="비밀번호 (Password)" 
                  className="w-full border border-gray-300 rounded-lg p-3 text-sm"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              {loginError && <p className="text-xs text-red-500 text-center">{loginError}</p>}
              
              <button 
                type="submit"
                className="w-full bg-wccw-purple text-white py-3 rounded-lg font-bold hover:bg-purple-800"
              >
                로그인
              </button>
              
              <div className="bg-gray-100 p-3 rounded-lg text-[10px] text-gray-500 text-center">
                <span className="font-bold">Test Accounts:</span><br/>
                User: user / 1234<br/>
                Admin: admin / Sarang77?
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Posts List */}
      <div className="space-y-4">
        {isLoading && posts.length === 0 ? (
          <div className="flex justify-center py-10">
            <Loader2 className="animate-spin text-wccw-purple" size={32} />
          </div>
        ) : (
          <>
            {posts.map((post) => (
              <div key={post.id} className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 relative group animate-fade-in">
                {(user?.isAdmin || user?.username === post.author) && (
                  <button 
                    onClick={() => handleDelete(post.id)}
                    className="absolute top-4 right-4 text-gray-300 hover:text-red-500 p-1"
                  >
                    <Trash2 size={16} />
                  </button>
                )}
                
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-gray-100 text-gray-600 text-[10px] px-2 py-1 rounded-full font-bold">
                    {post.author}
                  </span>
                  <span className="text-[10px] text-gray-400">{post.date}</span>
                </div>
                <h3 className="font-bold text-gray-800 mb-2">{post.title}</h3>
                <p className="text-sm text-gray-600 whitespace-pre-line leading-relaxed">
                  {post.content}
                </p>
              </div>
            ))}
            
            {posts.length === 0 && !error && (
              <div className="text-center py-10 text-gray-400">
                <p>등록된 게시글이 없습니다.<br/>가장 먼저 평화의 메시지를 남겨보세요.</p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Community;