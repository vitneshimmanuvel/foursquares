import React from 'react';
import './AnimatedWindows.css';

const WindowPane = ({ type = 'fixed', hinge = 'left', label }) => {
  if (type === 'fixed') {
    return (
      <div className="window-fixed">
        {label && <span className="fixed-label">{label}</span>}
      </div>
    );
  }
  
  let hingeClass = '';
  let handleClass = 'handle-pos-right'; // default
  
  if (type === 'slide') {
    hingeClass = `sash-slide-${hinge}`; // 'left' or 'right'
    handleClass = hinge === 'left' ? 'handle-pos-right' : 'handle-pos-left';
  } else if (type === 'tilt') {
    hingeClass = `sash-tilt-${hinge}`; // 'left' or 'right'
    handleClass = hinge === 'left' ? 'handle-pos-right' : 'handle-pos-left';
  } else {
    // normal open
    hingeClass = `sash-hinge-${hinge}`;
    if (hinge === 'right') handleClass = 'handle-pos-left';
    if (hinge === 'top') handleClass = 'handle-pos-bottom';
  }

  return (
    <div className={`window-sash ${hingeClass}`}>
      <div className={`window-handle ${handleClass}`}></div>
    </div>
  );
};

export const CustomWindow = ({ panes, topPanes = null, bottomPanes = null, width = '80px', height = '140px', name }) => {
  const renderRow = (rowPanes, rowHeight) => (
    <div className="window-row" style={{ display: 'flex', height: rowHeight, width: '100%' }}>
      {rowPanes.map((pane, index) => (
        <React.Fragment key={index}>
          <WindowPane type={pane.type} hinge={pane.hinge} label={pane.label} />
          {index < rowPanes.length - 1 && <div className="window-divider-vertical"></div>}
        </React.Fragment>
      ))}
    </div>
  );

  return (
    <div className="animated-window-wrapper">
      <div className="window-model" style={{ width, height }}>
        <div className="window-frame" style={{ width: '100%', height: '100%', flexDirection: 'column' }}>
          {topPanes && renderRow(topPanes, '30%')}
          {topPanes && <div className="window-divider-horizontal"></div>}
          
          {renderRow(panes, (topPanes && bottomPanes) ? '40%' : (topPanes || bottomPanes) ? '70%' : '100%')}
          
          {bottomPanes && <div className="window-divider-horizontal"></div>}
          {bottomPanes && renderRow(bottomPanes, '30%')}
        </div>
      </div>
      {name && <div style={{ marginTop: '12px', fontSize: '0.85rem', fontWeight: '500', color: '#555', textAlign: 'center', maxWidth: width }}>{name}</div>}
    </div>
  );
};

export const WindowGrid = ({ limit, category = 'casement' }) => {
  const casementRows = [
    {
      name: 'Standard Designs',
      items: [
        { width: "180px", height: "120px", name: "3-Pane Side Hung", panes: [{ type: 'open', hinge: 'left' }, { type: 'fixed' }, { type: 'open', hinge: 'right' }] },
        { width: "60px", height: "120px", name: "Fixed", panes: [{ type: 'fixed' }] },
        { width: "60px", height: "120px", name: "Single Right", panes: [{ type: 'open', hinge: 'right' }] },
        { width: "60px", height: "120px", name: "Single Left", panes: [{ type: 'open', hinge: 'left' }] },
        { width: "120px", height: "120px", name: "Double Side Hung", panes: [{ type: 'open', hinge: 'left' }, { type: 'open', hinge: 'right' }] },
        { width: "120px", height: "120px", name: "Fixed & Right", panes: [{ type: 'fixed' }, { type: 'open', hinge: 'right' }] },
        { width: "120px", height: "120px", name: "Twin Left", panes: [{ type: 'open', hinge: 'left' }, { type: 'open', hinge: 'left' }] },
      ]
    },
    {
      name: 'Triple Designs',
      items: [
        { width: "140px", height: "140px", name: "Double French", panes: [{ type: 'open', hinge: 'left' }, { type: 'open', hinge: 'right' }] },
        { width: "140px", height: "140px", name: "Left & Fixed", panes: [{ type: 'open', hinge: 'left' }, { type: 'fixed' }] },
        { width: "210px", height: "140px", name: "Triple Open", panes: [{ type: 'open', hinge: 'left' }, { type: 'open', hinge: 'left' }, { type: 'open', hinge: 'right' }] },
        { width: "210px", height: "160px", name: "Triple with Top Fixed", topPanes: [{ type: 'fixed' }, { type: 'fixed' }, { type: 'fixed' }], panes: [{ type: 'open', hinge: 'left' }, { type: 'open', hinge: 'left' }, { type: 'open', hinge: 'right' }] },
        { width: "210px", height: "140px", name: "Left, Fixed, Right", panes: [{ type: 'open', hinge: 'left' }, { type: 'fixed' }, { type: 'open', hinge: 'right' }] },
        { width: "210px", height: "140px", name: "Triple Left", panes: [{ type: 'open', hinge: 'left' }, { type: 'open', hinge: 'left' }, { type: 'open', hinge: 'left' }] },
        { width: "210px", height: "140px", name: "Triple Alternate", panes: [{ type: 'open', hinge: 'left' }, { type: 'open', hinge: 'left' }, { type: 'open', hinge: 'right' }] },
      ]
    },
    {
      name: 'Large Combinations',
      items: [
        { width: "240px", height: "140px", name: "Large 3-Pane", panes: [{ type: 'open', hinge: 'left' }, { type: 'fixed' }, { type: 'open', hinge: 'right' }] },
        { width: "100px", height: "180px", name: "Top Hung & Fixed", topPanes: [{ type: 'open', hinge: 'bottom' }, { type: 'open', hinge: 'bottom' }], panes: [{ type: 'open', hinge: 'left' }, { type: 'open', hinge: 'right' }] },
        { width: "320px", height: "140px", name: "4-Pane Center Open", panes: [{ type: 'fixed' }, { type: 'open', hinge: 'left' }, { type: 'open', hinge: 'right' }, { type: 'fixed' }] },
        { width: "400px", height: "140px", name: "5-Pane Wide", panes: [{ type: 'open', hinge: 'left' }, { type: 'fixed' }, { type: 'fixed' }, { type: 'fixed' }, { type: 'open', hinge: 'right' }] },
        { width: "480px", height: "140px", name: "6-Pane Extrawide", panes: [{ type: 'fixed' }, { type: 'open', hinge: 'left' }, { type: 'fixed' }, { type: 'fixed' }, { type: 'open', hinge: 'right' }, { type: 'fixed' }] },
      ]
    },
    {
      name: 'Special Configurations',
      items: [
        { width: "120px", height: "200px", name: "Door & Fixed", panes: [{ type: 'open', hinge: 'left' }, { type: 'fixed' }], bottomPanes: [{ type: 'fixed' }, { type: 'fixed' }] },
        { width: "240px", height: "180px", name: "4-Pane Top Fixed", topPanes: [{ type: 'fixed' }, { type: 'fixed' }, { type: 'fixed' }, { type: 'fixed' }], panes: [{ type: 'open', hinge: 'left' }, { type: 'open', hinge: 'right' }, { type: 'open', hinge: 'left' }, { type: 'open', hinge: 'right' }] },
        { width: "180px", height: "180px", name: "3-Pane Bottom Fixed", panes: [{ type: 'open', hinge: 'left' }, { type: 'fixed' }, { type: 'open', hinge: 'right' }], bottomPanes: [{ type: 'fixed' }, { type: 'fixed' }, { type: 'fixed' }] },
        { width: "120px", height: "180px", name: "2-Pane Bottom Fixed", panes: [{ type: 'open', hinge: 'left' }, { type: 'open', hinge: 'right' }], bottomPanes: [{ type: 'fixed' }, { type: 'fixed' }] },
        { width: "120px", height: "180px", name: "Top Hung Combinations", topPanes: [{ type: 'open', hinge: 'bottom' }, { type: 'open', hinge: 'bottom' }], panes: [{ type: 'open', hinge: 'left' }, { type: 'open', hinge: 'right' }], bottomPanes: [{ type: 'fixed' }, { type: 'fixed' }] },
        { width: "180px", height: "180px", name: "Triple Combination", panes: [{ type: 'open', hinge: 'left' }, { type: 'open', hinge: 'right' }, { type: 'fixed' }], bottomPanes: [{ type: 'fixed' }, { type: 'fixed' }, { type: 'fixed' }] },
        { width: "60px", height: "180px", name: "Single Bottom Fixed", panes: [{ type: 'open', hinge: 'right' }], bottomPanes: [{ type: 'fixed' }] },
      ]
    }
  ];

  const slidingRows = [
    {
      name: 'Sliding Designs',
      items: [
        { width: "120px", height: "120px", name: "2-Track 2-Panel", panes: [{ type: 'slide', hinge: 'right' }, { type: 'slide', hinge: 'left' }] },
        { width: "180px", height: "120px", name: "2-Track 3-Panel", panes: [{ type: 'slide', hinge: 'right' }, { type: 'fixed' }, { type: 'slide', hinge: 'left' }] },
        { width: "240px", height: "120px", name: "2-Track 4-Panel", panes: [{ type: 'fixed' }, { type: 'slide', hinge: 'right' }, { type: 'slide', hinge: 'left' }, { type: 'fixed' }] },
        { width: "180px", height: "120px", name: "3-Track 3-Panel", panes: [{ type: 'slide', hinge: 'right' }, { type: 'slide', hinge: 'left' }, { type: 'slide', hinge: 'right' }] },
        { width: "180px", height: "160px", name: "Sliding with Top Fixed", topPanes: [{ type: 'fixed' }, { type: 'fixed' }], panes: [{ type: 'slide', hinge: 'right' }, { type: 'slide', hinge: 'left' }] },
      ]
    }
  ];

  const tiltTurnRows = [
    {
      name: 'Tilt & Turn Designs',
      items: [
        { width: "60px", height: "120px", name: "Single Tilt & Turn", panes: [{ type: 'tilt', hinge: 'left' }] },
        { width: "120px", height: "120px", name: "Double Tilt & Turn", panes: [{ type: 'tilt', hinge: 'left' }, { type: 'tilt', hinge: 'right' }] },
        { width: "180px", height: "120px", name: "Tilt & Turn + Fixed", panes: [{ type: 'tilt', hinge: 'left' }, { type: 'fixed' }, { type: 'tilt', hinge: 'right' }] },
        { width: "120px", height: "180px", name: "Tilt & Turn with Bottom Fixed", panes: [{ type: 'tilt', hinge: 'left' }], bottomPanes: [{ type: 'fixed' }] },
        { width: "120px", height: "180px", name: "Tilt & Turn with Top Fixed", topPanes: [{ type: 'fixed' }], panes: [{ type: 'tilt', hinge: 'left' }] },
      ]
    }
  ];

  let allRows = casementRows;
  if (category === 'sliding') allRows = slidingRows;
  if (category === 'tilt-turn') allRows = tiltTurnRows;

  const rowsToDisplay = limit ? allRows.slice(0, 1) : allRows; // For limit, just show first row or part of it

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '60px', alignItems: 'center', width: '100%' }}>
      {rowsToDisplay.map((row, rowIdx) => (
        <div key={rowIdx} style={{ display: 'flex', gap: '30px', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'flex-start', width: '100%' }}>
          {row.items.slice(0, limit || row.items.length).map((item, idx) => (
            <CustomWindow 
              key={idx}
              width={item.width}
              height={item.height}
              name={item.name}
              panes={item.panes}
              topPanes={item.topPanes}
              bottomPanes={item.bottomPanes}
            />
          ))}
        </div>
      ))}
    </div>
  );
};
