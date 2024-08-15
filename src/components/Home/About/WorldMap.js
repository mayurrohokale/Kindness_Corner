import { VectorMap } from "@react-jvectormap/core";
import {worldMill} from "@react-jvectormap/world";
import React from 'react';

export default function WorldMap(){
    return (
        <VectorMap
           map={worldMill}
        />
)}