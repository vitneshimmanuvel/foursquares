import React from 'react';
import './AnimatedDoors.css';

const DoorPane = ({ type = 'fixed', hinge = 'left', label, foldIndex }) => {
  if (type === 'fixed') {
    return (
      <div className="door-fixed">
        {label && <span className="fixed-label">{label}</span>}
      </div>
    );
  }
  
  let hingeClass = '';
  let handleClass = 'door-handle-right'; // default
  
  if (type === 'slide') {
    hingeClass = `door-sash-slide-${hinge}`; // 'left' or 'right'
    handleClass = hinge === 'left' ? 'door-handle-right' : 'door-handle-left';
  } else if (type === 'fold') {
    hingeClass = `door-sash-fold-${foldIndex}`; // fold-1, fold-2, fold-3
    handleClass = foldIndex === 3 ? 'door-handle-left' : 'door-handle-hidden';
  } else {
    // normal open (casement)
    hingeClass = `door-sash-hinge-${hinge}`;
    if (hinge === 'right') handleClass = 'door-handle-left';
  }

  return (
    <div className={`door-sash ${hingeClass}`}>
      <div className="door-glass-reflection"></div>
      {handleClass !== 'door-handle-hidden' && (
        <div className={`door-handle ${handleClass}`}>
          <div className="handle-base"></div>
          <div className="handle-lever"></div>
        </div>
      )}
    </div>
  );
};

export const CustomDoor = ({ panes, topPanes = null, width = '140px', height = '220px', name }) => {
  const renderRow = (rowPanes, rowHeight) => (
    <div className="door-row" style={{ display: 'flex', height: rowHeight, width: '100%' }}>
      {rowPanes.map((pane, index) => (
        <React.Fragment key={index}>
          <DoorPane type={pane.type} hinge={pane.hinge} label={pane.label} foldIndex={pane.foldIndex} />
          {index < rowPanes.length - 1 && <div className="door-divider-vertical"></div>}
        </React.Fragment>
      ))}
    </div>
  );

  return (
    <div className="animated-door-wrapper">
      <div className="door-model" style={{ width, height }}>
        <div className="door-frame" style={{ width: '100%', height: '100%', flexDirection: 'column' }}>
          {topPanes && renderRow(topPanes, '25%')}
          {topPanes && <div className="door-divider-horizontal"></div>}
          
          {renderRow(panes, topPanes ? '75%' : '100%')}
        </div>
      </div>
      {name && <div className="door-title-text">{name}</div>}
    </div>
  );
};

export const DoorGrid = ({ limit, category = 'casement' }) => {
  const casementRows = [
    {
      name: 'Casement Door Designs',
      items: [
        { width: "90px", height: "220px", name: "Single Left Open", panes: [{ type: 'open', hinge: 'left' }] },
        { width: "90px", height: "220px", name: "Single Right Open", panes: [{ type: 'open', hinge: 'right' }] },
        { width: "170px", height: "220px", name: "Double French Door", panes: [{ type: 'open', hinge: 'left' }, { type: 'open', hinge: 'right' }] },
        { width: "240px", height: "220px", name: "French Door with Side Fixed", panes: [{ type: 'fixed', label: 'FIXED' }, { type: 'open', hinge: 'left' }, { type: 'open', hinge: 'right' }] },
        { width: "240px", height: "240px", name: "French Door with Top Arch/Fixed", topPanes: [{ type: 'fixed', label: 'TRANSOM' }, { type: 'fixed', label: 'TRANSOM' }], panes: [{ type: 'open', hinge: 'left' }, { type: 'open', hinge: 'right' }] },
      ]
    }
  ];

  const slidingRows = [
    {
      name: 'Sliding Door Designs',
      items: [
        { width: "180px", height: "220px", name: "2-Track 2-Panel (Left Slide)", panes: [{ type: 'slide', hinge: 'left' }, { type: 'fixed', label: 'FIXED' }] },
        { width: "180px", height: "220px", name: "2-Track 2-Panel (Right Slide)", panes: [{ type: 'fixed', label: 'FIXED' }, { type: 'slide', hinge: 'right' }] },
        { width: "260px", height: "220px", name: "3-Panel Sliding (Center Slide)", panes: [{ type: 'fixed', label: 'FIXED' }, { type: 'slide', hinge: 'left' }, { type: 'fixed', label: 'FIXED' }] },
        { width: "320px", height: "220px", name: "2-Track 4-Panel (Center Opening)", panes: [{ type: 'fixed', label: 'FIXED' }, { type: 'slide', hinge: 'right' }, { type: 'slide', hinge: 'left' }, { type: 'fixed', label: 'FIXED' }] },
      ]
    }
  ];

  const slideFoldRows = [
    {
      name: 'Slide & Fold Door Designs',
      items: [
        { 
          width: "240px", 
          height: "220px", 
          name: "3-Panel Slide & Fold", 
          panes: [
            { type: 'fold', foldIndex: 1 }, 
            { type: 'fold', foldIndex: 2 }, 
            { type: 'fold', foldIndex: 3 }
          ] 
        },
        { 
          width: "320px", 
          height: "220px", 
          name: "4-Panel Slide & Fold", 
          panes: [
            { type: 'fold', foldIndex: 1 }, 
            { type: 'fold', foldIndex: 2 }, 
            { type: 'fold', foldIndex: 3 },
            { type: 'fold', foldIndex: 4 }
          ] 
        }
      ]
    }
  ];

  let allRows = casementRows;
  if (category === 'sliding') allRows = slidingRows;
  if (category === 'slide-fold') allRows = slideFoldRows;

  const rowsToDisplay = limit ? allRows.slice(0, 1) : allRows;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '60px', alignItems: 'center', width: '100%' }}>
      {rowsToDisplay.map((row, rowIdx) => (
        <div key={rowIdx} style={{ display: 'flex', gap: '30px', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'flex-start', width: '100%' }}>
          {row.items.slice(0, limit || row.items.length).map((item, idx) => (
            <CustomDoor 
              key={idx}
              width={item.width}
              height={item.height}
              name={item.name}
              panes={item.panes}
              topPanes={item.topPanes}
            />
          ))}
        </div>
      ))}
    </div>
  );
};
