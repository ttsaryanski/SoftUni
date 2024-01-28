function gramophone(band, album, song) {

    let songTime = (band.length * album.length) * song.length / 2;
    let rotation = Math.ceil(songTime / 2.5);
    console.log(`The plate was rotated ${rotation} times.`);
    
}

gramophone('Black Sabbath', 'Paranoid', 'War Pigs');
gramophone('Rammstein', 'Sehnsucht', 'Engel');
