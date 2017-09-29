import React from 'react';

import styles from './styles.scss';

class Seekbar extends React.Component {

	handleClick(seek, queue) {
		return event => {
			let percent = (event.clientX - event.target.offsetLeft)/event.target.offsetWidth;
			let duration = queue.queueItems[queue.currentSong].streams[0].duration;
			seek(percent);
		}
		
	}

  render() {
    return (
      <div onClick={this.handleClick(this.props.seek, this.props.queue)} className={styles.seekbar_container}>
        <div style={{width: this.props.fill}} className={styles.seekbar_fill} />
      </div>
    );
  }
}

export default Seekbar;
