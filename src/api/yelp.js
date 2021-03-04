import React from 'react';
import axios from 'axios';


export default axios.create({
    baseURL:'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization:
        'Bearer CqZxDXpMH16sG2GLLYqldwG5ToXcMoQgeM3CuMNClEm9KuhwG4Pa3NtJoAZ4JnFqcsRTxEHCH6G8hBVLsHUu_FEaOq1UBWvHRPKiHmVs07YshjFYEFWtsxJvMYUCYHYx'
    }
});