export const getMoodColor = (mood) => {
    switch (mood.toLowerCase()) {
      case 'happy':
        return 'green';
      case 'excited':
        return 'yellow';
      case 'sad':
        return 'red';
      default:
        return 'gray';
    }
  };