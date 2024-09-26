import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './CloseButtonStyles'

const CloseButton: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <TouchableOpacity style={styles.closeButton} onPress={onClose}>
      <Text style={styles.close}>Close</Text>
    </TouchableOpacity>
  );
};

export default CloseButton;