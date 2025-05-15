import { useState } from 'react';
import { Mic, Pause, Play, BarChart2, Upload, HelpCircle, AlertCircle } from 'lucide-react';
import lungimg from './images/lung.jpg';
import wave from './images/aw.png';
// Inline styles to replace Tailwind CSS
const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#f9fafb',
    fontFamily: 'Arial, sans-serif'
  },
  header: {
    backgroundColor: '#ffffff',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
    padding: '16px 0'
  },
  headerContent: {
    maxWidth: '768px',
    margin: '0 auto',
    padding: '0 16px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  logo: {
    display: 'flex',
    alignItems: 'center'
  },
  logoIcon: {
    width: '40px',
    height: '40px',
    borderRadius: '6px',
    backgroundColor: '#2563eb',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '12px'
  },
  title: {
    fontSize: '20px',
    fontWeight: 'bold',
    margin: 0
  },
  helpButton: {
    padding: '8px',
    color: '#6b7280',
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer'
  },
  progressContainer: {
    maxWidth: '768px',
    margin: '0 auto',
    padding: '16px',
    marginBottom: '24px'
  },
  progressBar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '32px'
  },
  progressStep: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flex: 1
  },
  progressCircle: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  progressLine: {
    height: '4px',
    flex: 1,
    margin: '0 8px'
  },
  progressStepLabel: {
    fontSize: '12px',
    marginTop: '8px'
  },
  mainContainer: {
    maxWidth: '600px',
    margin: '0 auto',
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
    border: '1px solid #f1f1f1',
    marginBottom: '32px'
  },
  stepContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '24px'
  },
  stepTitle: {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '16px',
    textAlign: 'center'
  },
  stepDescription: {
    color: '#4b5563',
    marginBottom: '24px',
    textAlign: 'center'
  },
  formGroup: {
    width: '100%',
    maxWidth: '400px',
    marginBottom: '24px'
  },
  label: {
    display: 'block',
    fontSize: '14px',
    fontWeight: '500',
    color: '#374151',
    marginBottom: '8px'
  },
  select: {
    width: '100%',
    padding: '8px',
    border: '1px solid #d1d5db',
    borderRadius: '6px'
  },
  recordingCircle: {
    width: '256px',
    height: '256px',
    backgroundColor: '#eff6ff',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '16px',
    position: 'relative'
  },
  recordButton: {
    width: '64px',
    height: '64px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    border: 'none',
    cursor: 'pointer',
    zIndex: 2,
    position: 'relative',
    opacity: 0.8,
  },
  recordingStatus: {
    textAlign: 'center'
  },
  recordingActive: {
    color: '#ef4444',
    fontWeight: 'bold',
    marginBottom: '4px'
  },
  recordingComplete: {
    color: '#10b981',
    fontWeight: 'bold'
  },
  recordingInactive: {
    color: '#6b7280'
  },
  progressBarContainer: {
    width: '256px',
    height: '8px',
    backgroundColor: '#e5e7eb',
    borderRadius: '4px',
    marginTop: '8px'
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: '#ef4444',
    borderRadius: '4px'
  },
  button: {
    padding: '12px 24px',
    borderRadius: '6px',
    fontWeight: '500',
    cursor: 'pointer',
    border: 'none'
  },
  primaryButton: {
    backgroundColor: '#2563eb',
    color: '#ffffff'
  },
  disabledButton: {
    backgroundColor: '#d1d5db',
    cursor: 'not-allowed'
  },
  infoCard: {
    width: '100%',
    maxWidth: '400px',
    backgroundColor: '#f9fafb',
    padding: '16px',
    borderRadius: '8px',
    marginBottom: '24px'
  },
  cardRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '16px'
  },
  analyzeButton: {
    width: '100%',
    padding: '12px',
    marginBottom: '12px',
    borderRadius: '6px',
    fontWeight: '500',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  secondaryButton: {
    width: '100%',
    padding: '12px',
    borderRadius: '6px',
    fontWeight: '500',
    border: '1px solid #d1d5db',
    backgroundColor: 'transparent',
    color: '#374151',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer'
  },
  waveform: {
    width: '100%',
    height: '96px',
    objectFit: 'cover',
    borderRadius: '6px',
    marginBottom: '32px'
  },
  resultCard: {
    backgroundColor: '#eff6ff',
    padding: '24px',
    borderRadius: '8px',
    border: '1px solid #dbeafe',
    marginBottom: '24px'
  },
  resultHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '16px'
  },
  resultTitle: {
    fontSize: '18px',
    fontWeight: 'bold'
  },
  confidenceBadge: {
    backgroundColor: '#2563eb',
    color: '#ffffff',
    padding: '4px 8px',
    borderRadius: '4px',
    fontSize: '12px'
  },
  diagnosisContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  diagnosisIcon: {
    width: '48px',
    height: '48px',
    backgroundColor: '#dbeafe',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '16px'
  },
  diagnosisName: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#1e40af'
  },
  diagnosisDescription: {
    fontSize: '12px',
    color: '#6b7280'
  },
  dataCard: {
    backgroundColor: '#ffffff',
    border: '1px solid #e5e7eb',
    borderRadius: '8px',
    boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)',
    marginBottom: '24px'
  },
  cardHeader: {
    borderBottom: '1px solid #e5e7eb',
    padding: '12px 16px',
    fontWeight: '500'
  },
  cardContent: {
    padding: '16px'
  },
  alternativeItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '8px'
  },
  probabilityContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  probabilityText: {
    fontSize: '12px',
    color: '#6b7280',
    marginRight: '8px'
  },
  probabilityBar: {
    width: '80px',
    height: '8px',
    backgroundColor: '#e5e7eb',
    borderRadius: '4px'
  },
  probabilityFill: {
    height: '100%',
    backgroundColor: '#93c5fd',
    borderRadius: '4px'
  },
  featuresGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '12px'
  },
  featureItem: {
    display: 'flex',
    alignItems: 'center'
  },
  featureIndicator: {
    width: '16px',
    height: '16px',
    borderRadius: '50%',
    marginRight: '8px'
  },
  featureName: {
    fontSize: '14px',
    fontWeight: '500',
    textTransform: 'capitalize'
  },
  featureValue: {
    fontSize: '12px',
    color: '#6b7280'
  },
  buttonContainer: {
    display: 'flex',
    gap: '12px'
  },
  actionButton: {
    flex: 1,
    padding: '12px',
    borderRadius: '6px',
    fontWeight: '500',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer'
  },
  pulseAnimation: {
    animation: 'pulse 2s infinite'
  },
  spinner: {
    animation: 'spin 1s linear infinite',
    borderRadius: '50%',
    borderTop: '2px solid transparent',
    borderRight: '2px solid #ffffff',
    borderBottom: '2px solid #ffffff',
    borderLeft: '2px solid #ffffff',
    width: '20px',
    height: '20px',
    marginRight: '8px'
  }
};

export default function LungSoundAnalyzerApp() {
  const [recording, setRecording] = useState(false);
  const [recordingComplete, setRecordingComplete] = useState(false);
  const [analyzing, setAnalyzing] = useState(false);
  const [results, setResults] = useState(null);
  const [selectedPosition, setSelectedPosition] = useState('front_upper_right');
  const [currentStep, setCurrentStep] = useState(1);
  const [recordingTime, setRecordingTime] = useState(0);
  
  const handleRecord = () => {
    if (recording) {
      setRecording(false);
      setRecordingComplete(true);
    } else {
      setRecording(true);
      setRecordingComplete(false);
      setRecordingTime(0);
      
      // Simulate recording time counter
      const timer = setInterval(() => {
        setRecordingTime(prev => {
          if (prev >= 15) {
            clearInterval(timer);
            setRecording(false);
            setRecordingComplete(true);
            return 15;
          }
          return prev + 1;
        });
      }, 1000);
    }
  };
  
  const handleAnalyze = () => {
    setAnalyzing(true);
    
    // Simulate analysis delay
    setTimeout(() => {
      setAnalyzing(false);
      
      // Sample results data (would come from your actual model)
      setResults({
        primaryDiagnosis: 'Bronchitis',
        confidence: 87,
        alternativeDiagnoses: [
          { name: 'Normal', probability: 8 },
          { name: 'Pneumonia', probability: 3 },
          { name: 'Asthma', probability: 2 }
        ],
        audioFeatures: {
          crackles: 'Present',
          wheezes: 'Mild',
          rhonchi: 'Present',
          breath_sounds: 'Diminished'
        }
      });
      
      setCurrentStep(3);
    }, 2000);
  };
  
  const resetApp = () => {
    setRecording(false);
    setRecordingComplete(false);
    setAnalyzing(false);
    setResults(null);
    setCurrentStep(1);
    setRecordingTime(0);
  };
  
  const positions = [
    { id: 'front_upper_right', label: 'Front Upper Right' },
    { id: 'front_upper_left', label: 'Front Upper Left' },
    { id: 'front_lower_right', label: 'Front Lower Right' },
    { id: 'front_lower_left', label: 'Front Lower Left' },
    { id: 'back_upper_right', label: 'Back Upper Right' },
    { id: 'back_upper_left', label: 'Back Upper Left' },
    { id: 'back_lower_right', label: 'Back Lower Right' },
    { id: 'back_lower_left', label: 'Back Lower Left' }
  ];
  
  const renderBody = () => {
    if (currentStep === 1) {
      return (
        <div style={styles.stepContainer}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '32px' }}>
            <h2 style={styles.stepTitle}>Step 1: Record Lung Sound</h2>
            <p style={styles.stepDescription}>
              Select a position and record lung sounds for 10-15 seconds.
              Hold the microphone close to the patient's chest.
            </p>
            
            <div style={styles.formGroup}>
              <label style={styles.label}>
                Select Recording Position:
              </label>
              <select 
                style={styles.select}
                value={selectedPosition}
                onChange={(e) => setSelectedPosition(e.target.value)}
              >
                {positions.map(pos => (
                  <option key={pos.id} value={pos.id}>{pos.label}</option>
                ))}
              </select>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '24px' }}>
              <div style={styles.recordingCircle}>
                <div style={{ position: 'absolute' , zIndex: 1 }}>
                  <img src={lungimg} alt="Lung ption diagram" style={{ opacity: 0.6 }} />
                </div>
                <button 
                  onClick={handleRecord}
                  style={{
                    ...styles.recordButton,
                    backgroundColor: recording ? '#ef4444' : '#2563eb',
                    ...(recording && { animation: 'pulse 2s infinite' })
                  }}
                >
                  {recording ? 
                    <Pause size={32} style={{ color: 'white' }} /> : 
                    <Mic size={32} style={{ color: 'white' }} />
                  }
                </button>
              </div>
              
              <div style={styles.recordingStatus}>
                {recording ? (
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <p style={styles.recordingActive}>Recording in progress...</p>
                    <p style={{ fontSize: '14px' }}>{recordingTime} sec / 15 sec</p>
                    <div style={styles.progressBarContainer}>
                      <div 
                        style={{
                          ...styles.progressBarFill,
                          width: `${(recordingTime / 15) * 100}%`
                        }}
                      ></div>
                    </div>
                  </div>
                ) : recordingComplete ? (
                  <p style={styles.recordingComplete}>Recording complete!</p>
                ) : (
                  <p style={styles.recordingInactive}>Press to start recording</p>
                )}
              </div>
            </div>
          </div>
          
          <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
            <button 
              style={{
                ...styles.button,
                ...(recordingComplete ? styles.primaryButton : styles.disabledButton)
              }}
              disabled={!recordingComplete}
              onClick={() => setCurrentStep(2)}
            >
              Continue
            </button>
          </div>
        </div>
      );
    } else if (currentStep === 2) {
      return (
        <div style={styles.stepContainer}>
          <h2 style={styles.stepTitle}>Step 2: Confirm and Analyze</h2>
          
          <div style={styles.infoCard}>
            <div style={styles.cardRow}>
              <span style={{ fontWeight: '500' }}>Recording Position:</span>
              <span>{positions.find(p => p.id === selectedPosition)?.label}</span>
            </div>
            
            <div style={styles.cardRow}>
              <span style={{ fontWeight: '500' }}>Duration:</span>
              <span>{recordingTime} seconds</span>
            </div>
            
            <div style={styles.cardRow}>
              <span style={{ fontWeight: '500' }}>Audio Preview:</span>
              <button style={{ 
                display: 'flex', 
                alignItems: 'center', 
                color: '#2563eb',
                background: 'none',
                border: 'none',
                cursor: 'pointer'
              }}>
                <Play size={16} style={{ marginRight: '4px' }} /> Play
              </button>
            </div>
          </div>
          
          <div style={{ width: '100%', maxWidth: '400px', padding: '16px 0' }}>
            <div style={{ marginBottom: '32px' }}>
              <img src={wave} alt="Audio waveform" style={styles.waveform} />
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <button 
                style={{
                  ...styles.analyzeButton,
                  ...(analyzing ? { 
                    backgroundColor: '#9ca3af',
                    cursor: 'not-allowed'
                  } : { 
                    backgroundColor: '#2563eb', 
                    color: '#ffffff',
                    cursor: 'pointer'
                  })
                }}
                onClick={handleAnalyze}
                disabled={analyzing}
              >
                {analyzing ? (
                  <>
                    <div style={styles.spinner}></div>
                    Analyzing...
                  </>
                ) : (
                  <>
                    <BarChart2 size={18} style={{ marginRight: '8px' }} />
                    Analyze Recording
                  </>
                )}
              </button>
              
              <button 
                style={styles.secondaryButton}
                onClick={resetApp}
              >
                Record Again
              </button>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div style={styles.stepContainer}>
          <h2 style={styles.stepTitle}>Analysis Results</h2>
          <p style={styles.stepDescription}>
            Based on the lung sound analysis, here are the results:
          </p>
          
          <div style={{ width: '100%', maxWidth: '400px' }}>
            <div style={styles.resultCard}>
              <div style={styles.resultHeader}>
                <h3 style={styles.resultTitle}>Primary Diagnosis</h3>
                <span style={styles.confidenceBadge}>
                  {results?.confidence}% confidence
                </span>
              </div>
              
              <div style={styles.diagnosisContainer}>
                <div style={styles.diagnosisIcon}>
                  <AlertCircle size={28} style={{ color: '#2563eb' }} />
                </div>
                <div>
                  <p style={styles.diagnosisName}>{results?.primaryDiagnosis}</p>
                  <p style={styles.diagnosisDescription}>Based on acoustic signature analysis</p>
                </div>
              </div>
            </div>
            
            <div style={styles.dataCard}>
              <h3 style={styles.cardHeader}>
                Alternative Possibilities
              </h3>
              <div style={styles.cardContent}>
                {results?.alternativeDiagnoses.map((alt, index) => (
                  <div key={index} style={{
                    ...styles.alternativeItem,
                    ...(index === results.alternativeDiagnoses.length - 1 ? { marginBottom: 0 } : {})
                  }}>
                    <span>{alt.name}</span>
                    <div style={styles.probabilityContainer}>
                      <span style={styles.probabilityText}>{alt.probability}%</span>
                      <div style={styles.probabilityBar}>
                        <div 
                          style={{
                            ...styles.probabilityFill,
                            width: `${alt.probability}%`
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div style={styles.dataCard}>
              <h3 style={styles.cardHeader}>
                Detected Audio Features
              </h3>
              <div style={styles.cardContent}>
                <div style={styles.featuresGrid}>
                  {Object.entries(results?.audioFeatures || {}).map(([key, value], index) => (
                    <div key={index} style={styles.featureItem}>
                      <div style={{
                        ...styles.featureIndicator,
                        backgroundColor: value === 'Present' || value === 'Significant' ? '#ef4444' : 
                                         value === 'Mild' ? '#f59e0b' : '#10b981'
                      }}></div>
                      <div>
                        <p style={styles.featureName}>
                          {key.replace('_', ' ')}
                        </p>
                        <p style={styles.featureValue}>{value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div style={styles.buttonContainer}>
              <button 
                style={{
                  ...styles.actionButton,
                  backgroundColor: '#2563eb',
                  color: '#ffffff'
                }}
                onClick={() => {}}
              >
                <Upload size={18} style={{ marginRight: '8px' }} />
                Save Report
              </button>
              
              <button 
                style={{
                  ...styles.actionButton,
                  border: '1px solid #d1d5db',
                  backgroundColor: '#ffffff',
                  color: '#374151'
                }}
                onClick={resetApp}
              >
                Record New Sample
              </button>
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <div style={styles.headerContent}>
          <div style={styles.logo}>
            <div style={styles.logoIcon}>
              <Mic size={20} style={{ color: 'white' }} />
            </div>
            <h1 style={styles.title}>Lung Sound Analyzer</h1>
          </div>
          
          <button style={styles.helpButton}>
            <HelpCircle size={22} />
          </button>
        </div>
      </div>
      
      {/* Progress Indicator */}
      <div style={styles.progressContainer}>
        <div style={styles.progressBar}>
          <div style={styles.progressStep}>
            <div style={{
              ...styles.progressCircle,
              backgroundColor: currentStep >= 1 ? '#2563eb' : '#e5e7eb',
              color: currentStep >= 1 ? '#ffffff' : '#6b7280'
            }}>
              <Mic size={18} />
            </div>
            <span style={styles.progressStepLabel}>Record</span>
          </div>
          <div style={{
            ...styles.progressLine,
            backgroundColor: '#e5e7eb'
          }}>
            <div 
              style={{
                height: '100%',
                backgroundColor: '#2563eb',
                width: currentStep >= 2 ? '100%' : '0%'
              }}
            ></div>
          </div>
          <div style={styles.progressStep}>
            <div style={{
              ...styles.progressCircle,
              backgroundColor: currentStep >= 2 ? '#2563eb' : '#e5e7eb',
              color: currentStep >= 2 ? '#ffffff' : '#6b7280'
            }}>
              <Play size={18} />
            </div>
            <span style={styles.progressStepLabel}>Review</span>
          </div>
          <div style={{
            ...styles.progressLine,
            backgroundColor: '#e5e7eb'
          }}>
            <div 
              style={{
                height: '100%',
                backgroundColor: '#2563eb',
                width: currentStep >= 3 ? '100%' : '0%'
              }}
            ></div>
          </div>
          <div style={styles.progressStep}>
            <div style={{
              ...styles.progressCircle,
              backgroundColor: currentStep >= 3 ? '#2563eb' : '#e5e7eb',
              color: currentStep >= 3 ? '#ffffff' : '#6b7280'
            }}>
              <BarChart2 size={18} />
            </div>
            <span style={styles.progressStepLabel}>Results</span>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div style={styles.mainContainer}>
        {renderBody()}
      </div>
    </div>
  );
}