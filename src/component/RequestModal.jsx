'use client';

import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const RequestModal = ({ petId, onClose }) => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:8000/requests/${petId}`)
      .then(res => res.json())
      .then(data => {
        setRequests(data);
        setLoading(false);
      })
      .catch(() => {
        toast.error("Failed to load requests");
        setLoading(false);
      });
  }, [petId]);

  const handleApprove = async (id) => {
    try {
      await fetch(`http://localhost:8000/request/approve/${id}`, {
        method: "PATCH"
      });
      toast.success("Request approved successfully");
      setRequests(prev =>
        prev.map(r => r._id === id ? { ...r, status: "approved" } : r)
      );
    } catch {
      toast.error("Something went wrong");
    }
  };

  const handleReject = async (id) => {
    try {
      await fetch(`http://localhost:8000/request/reject/${id}`, {
        method: "PATCH"
      });
      toast.success("Request rejected");
      setRequests(prev =>
        prev.map(r => r._id === id ? { ...r, status: "rejected" } : r)
      );
    } catch {
      toast.error("Something went wrong");
    }
  };

  // Status badge styling helper
  const getStatusBadge = (status) => {
    const styles = {
      pending: "bg-amber-50 text-amber-700 border-amber-200",
      approved: "bg-emerald-50 text-emerald-700 border-emerald-200",
      rejected: "bg-rose-50 text-rose-700 border-rose-200"
    };
    return `text-xs font-medium px-2.5 py-1 rounded-full border ${styles[status] || styles.pending}`;
  };

  return (
    <div 
      className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm flex items-center justify-center p-4 z-50 transition-opacity"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-2xl shadow-xl w-full max-w-md max-h-[85vh] flex flex-col overflow-hidden border border-slate-100"
        onClick={(e) => e.stopPropagation()} // Prevents closing when clicking inside the modal
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
          <div>
            <h2 className="text-xl font-bold text-slate-800">Adoption Requests</h2>
            <p className="text-xs text-slate-500 mt-0.5">Manage incoming applications for this pet</p>
          </div>
          <button 
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 p-1.5 hover:bg-slate-50 rounded-lg transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content Area */}
        <div className="p-6 overflow-y-auto flex-1 space-y-4 custom-scrollbar">
          {loading ? (
            <div className="flex flex-col items-center justify-center py-12 space-y-3">
              <div className="w-8 h-8 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
              <p className="text-sm text-slate-500 font-medium">Fetching requests...</p>
            </div>
          ) : requests.length === 0 ? (
            <div className="text-center py-12 px-4">
              <div className="w-12 h-12 bg-slate-50 text-slate-400 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.03 0 1.9.693 2.166 1.638m-7.377 2.24a4.5 4.5 0 1 1 1.5.285m-1.5-.285h.008v.008h-.008V6.111Z" />
                </svg>
              </div>
              <h3 className="text-sm font-semibold text-slate-700">No requests yet</h3>
              <p className="text-xs text-slate-400 mt-1">When users apply to adopt, their files will show up right here.</p>
            </div>
          ) : (
            requests.map(req => (
              <div 
                key={req._id} 
                className="bg-slate-50 hover:bg-slate-100/70 border border-slate-100 rounded-xl p-4 transition-all flex flex-col justify-between gap-4"
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div>
                      <h3 className="font-semibold text-slate-800 text-base leading-tight">{req.userName}</h3>
                      <p className="text-xs text-slate-500 mt-0.5">{req.userEmail}</p>
                    </div>
                    <span className={getStatusBadge(req.status)}>
                      {req.status.charAt(0).toUpperCase() + req.status.slice(1)}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs text-slate-600 bg-white border border-slate-100 rounded-lg p-2 mt-3 w-fit">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3.5 h-3.5 text-slate-400">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                    </svg>
                    <span>Pickup: <strong className="text-slate-700 font-medium">{req.pickupDate}</strong></span>
                  </div>
                </div>

                {/* Interactive Action Buttons */}
                {req.status === "pending" && (
                  <div className="flex gap-2.5 pt-2 border-t border-slate-200/60">
                    <button
                      onClick={() => handleApprove(req._id)}
                      className="flex-1 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white text-xs font-semibold py-2 px-3 rounded-lg shadow-sm shadow-emerald-600/10 transition-all flex items-center justify-center gap-1"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3.5 h-3.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      Approve
                    </button>

                    <button
                      onClick={() => handleReject(req._id)}
                      className="flex-1 bg-white hover:bg-rose-50 border border-slate-200 hover:border-rose-200 text-slate-700 hover:text-rose-700 text-xs font-semibold py-2 px-3 rounded-lg transition-all flex items-center justify-center gap-1"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3.5 h-3.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      Reject
                    </button>
                  </div>
                )}
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3.5 bg-slate-50 border-t border-slate-100 flex justify-end">
          <button 
            onClick={onClose} 
            className="px-4 py-2 bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 font-medium text-xs rounded-lg shadow-sm transition-all"
          >
            Close Panel
          </button>
        </div>
      </div>
    </div>
  );
};

export default RequestModal;