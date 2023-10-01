'use client'
import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:3001'); // Replace with your server URL

export default function Page() {
    const [roomId, setRoomId] = useState('');
    const [room, setRoom] = useState(null);

    useEffect(() => {
        // Handle room creation response
        socket.on('roomCreated', (newRoomId) => {
            setRoomId(newRoomId);
        });
    
        // Handle room join response
        socket.on('roomJoined', (joinedRoom) => {
            setRoom(joinedRoom);
        });
    
        // Handle room not found response
        socket.on('roomNotFound', () => {
            alert('Room not found. Please check the room ID.');
        });
    }, []);

    const createRoom = (roomName: string) => {
        socket.emit('createRoom', roomName);
    };

    const joinRoom = (roomIdToJoin: string) => {
        socket.emit('joinRoom', roomIdToJoin);
    };

    return (
    <div>hello</div>
        )
}


