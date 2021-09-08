import React from "react";
import { ActivityIndicator, View } from "react-native";

const LoadingProgressBar = ({ color }) => (
    <ActivityIndicator size="small" color={color || "#fff"} style={{ width: 10, height: 10 }} />
);

export default LoadingProgressBar;