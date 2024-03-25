const { sanitizeVideoTitle } = require('./server');

describe('sanitizeVideoTitle', () => {
  it('should replace special characters in the video title with hyphens', () => {
    // Arrange
    const videoTitle = 'My Video/Title?With%Special:Characters|<>';

    // Act
    const sanitizedTitle = sanitizeVideoTitle(videoTitle);

    // Assert
    expect(sanitizedTitle).toBe('My Video-Title-With-Special-Characters-');
  });

  it('should not modify the video title if it does not contain any special characters', () => {
    // Arrange
    const videoTitle = 'My Video Title Without Special Characters';

    // Act
    const sanitizedTitle = sanitizeVideoTitle(videoTitle);

    // Assert
    expect(sanitizedTitle).toBe(videoTitle);
  });
});