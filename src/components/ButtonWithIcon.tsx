import React, { FC } from 'react'
import { 
    StyleSheet, 
    TouchableOpacity, 
    Image, 
    ImageSourcePropType 
} from 'react-native'

interface ButtonProps { 
    onTap: Function,
    width: number,
    height: number,
    icon: ImageSourcePropType
}

export const ButtonWithIcon: FC<ButtonProps> = ({ onTap, icon, width, height }) => {
    return (
        <TouchableOpacity
            style={[styles.btn, { width, height } ]} 
            onPress={() =>  onTap()}
        >
            <Image 
                style={{ width: (width - 2), height: (height - 2)}} 
                source={icon}
            />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btn: { 
        display: 'flex',  
        justifyContent: 'center', 
        alignItems: 'center', 
        width: 60, 
        height: 40
    }
})