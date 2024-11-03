import KeyBoards from "@/components/Keyboards";
import LinkButton from "@/components/LinkButton";
import { View, Text, StyleSheet } from "react-native";

export default function LessonPage() {
    return (
        <View style={styles.lessonPageContainer}>
            <View style={styles.topSpace}></View>
            <LinkButton href="/">Top</LinkButton>
            <View style={styles.midSpace}></View>
            <KeyBoards />
        </View>
    );
}

const styles = StyleSheet.create({
    lessonPageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },
    topSpace: {
        marginBottom: 40
    },
    midSpace: {
        marginBottom: 300
    },
});
