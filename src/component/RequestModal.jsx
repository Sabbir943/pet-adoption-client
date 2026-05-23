'use client';

import { authClient } from '@/lib/auth-client';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const RequestModal = ({ petId, onClose }) => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadRequests = async () => {
      try {
        setLoading(true);

        const res = await fetch(
          `http://localhost:8000/requests/${petId}`
        );

        const data = await res.json();

        setRequests(
          Array.isArray(data)
            ? data
            : Array.isArray(data?.data)
            ? data.data
            : []
        );
      } catch {
        toast.error('Failed to load requests');
        setRequests([]);
      } finally {
        setLoading(false);
      }
    };

    if (petId) {
      loadRequests();
    }
  }, [petId]);

  const handleApprove = async (id) => {
    try {
      const { data: TokenData } =
        await authClient.token();

      const res = await fetch(
        `http://localhost:8000/approve/${id}`,
        {
          method: 'PATCH',
          headers: {
            authorization: `Bearer ${TokenData?.token}`,
          },
        }
      );

      if (!res.ok) {
        throw new Error();
      }

      toast.success('Request approved');

      setRequests(prev =>
        prev.map(item =>
          item._id === id
            ? { ...item, status: 'approved' }
            : item
        )
      );
    } catch {
      toast.error('Something went wrong');
    }
  };

  const handleReject = async (id) => {
    try {
      const { data: TokenData } =
        await authClient.token();

      const res = await fetch(
        `http://localhost:8000/reject/${id}`,
        {
          method: 'PATCH',
          headers: {
            authorization: `Bearer ${TokenData?.token}`,
          },
        }
      );

      if (!res.ok) {
        throw new Error();
      }

      toast.success('Request rejected');

      setRequests(prev =>
        prev.map(item =>
          item._id === id
            ? { ...item, status: 'rejected' }
            : item
        )
      );
    } catch {
      toast.error('Something went wrong');
    }
  };

  const getStatusBadge = (status) => {
    const styles = {
      pending:
        'bg-amber-50 text-amber-700 border-amber-200',
      approved:
        'bg-emerald-50 text-emerald-700 border-emerald-200',
      rejected:
        'bg-rose-50 text-rose-700 border-rose-200',
    };

    return `text-xs font-medium px-2 py-1 rounded-full border ${
      styles[status] || styles.pending
    }`;
  };

  return (
    <div
      className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl w-full max-w-lg max-h-[80vh] overflow-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-5 border-b flex justify-between">
          <h2 className="font-bold text-xl">
            Adoption Requests
          </h2>

          <button onClick={onClose}>
            ✕
          </button>
        </div>

        <div className="p-5">

          {loading ? (
            <div className="text-center py-10">
              Loading...
            </div>
          ) : requests.length === 0 ? (
            <div className="text-center py-10">
              No Requests Found
            </div>
          ) : (
            requests.map((req) => (
              <div
                key={req._id}
                className="border rounded-xl p-4 mb-4"
              >
                <div className="flex justify-between">

                  <div>
                    <h3 className="font-semibold">
                      {req?.userName}
                    </h3>

                    <p className="text-sm text-gray-500">
                      {req?.userEmail}
                    </p>
                  </div>

                  <span
                    className={getStatusBadge(
                      req?.status
                    )}
                  >
                    {req?.status || 'Pending'}
                  </span>
                </div>

                <p className="mt-3 text-sm">
                  Pickup Date:
                  {' '}
                  {req?.pickupDate}
                </p>

                {req?.status === 'pending' && (
                  <div className="flex gap-3 mt-4">

                    <button
                      onClick={() =>
                        handleApprove(req._id)
                      }
                      className="bg-green-600 text-white px-4 py-2 rounded"
                    >
                      Approve
                    </button>

                    <button
                      onClick={() =>
                        handleReject(req._id)
                      }
                      className="bg-red-600 text-white px-4 py-2 rounded"
                    >
                      Reject
                    </button>

                  </div>
                )}
              </div>
            ))
          )}

        </div>
      </div>
    </div>
  );
};

export default RequestModal;