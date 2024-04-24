import { Component, useState } from "react";
import { Button, StyleSheet, Text, View } from 'react-native';
import Habit from "./habit";


export default function MainPage(props) {
    const [habits, setHabits] = useState([]);

    return (
        <View>
            {
                habits.map((habit, index) => (
                    <Habit key={index} name={habit.name} completed={habit.completed}/>
                ))
            }
            <Button
                onPress={() => setHabits(
                    [
                        ...habits,
                        {
                            name: "",
                            completed: false,
                        }
                    ]
                )}
                title="Add Habit"
                color="#00A6EA"
            >
                Add Habit
            </Button>
        </View>
    );
}