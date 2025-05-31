import {create} from 'zustand';
import {axiosInstance} from '../lib/axios';
import toast from 'react-hot-toast';
import { io } from 'socket.io-client';



const BASE_URL = import.meta.env.MODE === "development" ? "http://localhost:5001" : "/";
export const useAuthStore = create((set,get) => ({
    authUser: null,
    isSigningUp: false,
    isLoggingIn: false,
    isUpdatingProfile: false,
    isCheckingAuth: true,
    onlineUsers: [],
    socket:null,


    checkAuth: async()=>{
        try{
            const res = await axiosInstance.get('/auth/check');

            set({authUser:res.data})
            get().connectSocket();
        }
        catch(err){
            set({authUser:null})
        }finally{
            set({isCheckingAuth:false});
        }
    },

    signup: async(Data) =>{
        set({isSigningUp:true})
        try{
           const res =  await axiosInstance.post('/auth/signup', Data);
             set({authUser:res.data})
           toast.success("Account created successfully");
        }catch (error) {
            toast.error(error.response.data.message);
        }finally{
            set({isSigningUp:false})
        }
    },
    login: async(Data) =>{
        set({isLoggingIn:true});
        try{
            const res = await axiosInstance.post('/auth/login', Data);
            set({authUser:res.data});
            toast.success("Logged in successfully");
            get().connectSocket();
        }catch(err){
            toast.error(err.response.data.message);
        }finally{
            set({isLoggingIn:false});
        }
    },

    logout: async() => {
        try{
          await axiosInstance.post("/auth/logout");
            set({authUser:null});
            toast.success("Logged out successfully");
            get().disconnectSocket();
        }catch(err){
            toast.error(err.response.data.message);
        }
    },

    updateProfile: async(data) => {
        set({isUpdatingProfile:true});
        try{
            const res = await axiosInstance.put('/auth/update-profile', data);
            set({authUser: res.data});
            toast.success("Profile updated successfully");
        }catch(err){
            console.log("error in updating the profile", err);
            toast.error(err.response.data.message);
        }finally{
            set({isUpdatingProfile:false});
        }
       

    },

    connectSocket: () => {
        const {authUser} = get();
        if(!authUser || get().socket?.connected) return;

        const socket= io(BASE_URL,{
        query:{

        }})
        socket.connect();
        set({socket:socket});

        socket.on("getOnlineUsers",(userIds)=>{
            set({onlineUsers:userIds});
        });
    },

    disconnectSocket: () => {
       if(get().socket?.connected) get().socket.disconnect();
    },




}));