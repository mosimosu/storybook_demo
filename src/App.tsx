import { useState } from 'react'
import { ThemeProvider } from '@mui/system'
import theme from './theme'
import Button from './components/Button'
import Badge from './components/Badge'
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
// import { AdvancedDataGrid } from './components/DataGridPagination'
// import { rows } from './components/DataGridPagination/rowData'
// import { columns } from './components/DataGridPagination/columData'

function App() {
    const [isDisabled, setIsDisabled] = useState(false)
    const sizeAry = ['small', 'medium', 'large'].reverse()
    const [isUnRead, setIsUnRead] = useState(true)

    const handleDisabled = () => {
        // 這裡可以根據你的邏輯來設置 isDisabled 的值
        setIsDisabled(!isDisabled)
    }
    const handleRead = () => setIsUnRead(!isUnRead)

    return (
        <>
            <ThemeProvider theme={theme}>
                <section
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '8px',
                        marginBottom: '8px'
                    }}
                >
                    <h3 style={{ fontSize: '24px' }}>一般 Button</h3>
                    <div>
                        <h6 style={{ fontSize: '18px' }}>Primary</h6>
                        <Button
                            variant="contained"
                            color="primary"
                            size="large"
                            onClick={handleDisabled}
                            disabled={isDisabled}
                            text={isDisabled ? '無效' : '有效'}
                        />
                        <Button
                            variant="contained"
                            color="primary"
                            size="medium"
                            onClick={handleDisabled}
                            text={isDisabled ? '無效' : '有效'}
                        />
                        <Button
                            variant="contained"
                            color="primary"
                            size="small"
                            onClick={handleDisabled}
                            text={isDisabled ? '無效' : '有效'}
                        />
                    </div>
                    <div>
                        <h6 style={{ fontSize: '18px' }}>Secondary</h6>
                        <Button
                            variant="contained"
                            color="secondary"
                            size="large"
                            onClick={handleDisabled}
                            disabled={isDisabled}
                            text={isDisabled ? '無效' : '有效'}
                        />
                        <Button
                            variant="contained"
                            color="secondary"
                            size="medium"
                            onClick={handleDisabled}
                            text={isDisabled ? '無效' : '有效'}
                        />
                        <Button
                            variant="contained"
                            color="secondary"
                            size="small"
                            onClick={handleDisabled}
                            text={isDisabled ? '無效' : '有效'}
                        />
                    </div>
                    <div>
                        <h6 style={{ fontSize: '18px' }}>Success</h6>
                        {sizeAry.map((size, index) => (
                            <Button
                                variant="contained"
                                color="success"
                                size={size as 'small' | 'medium' | 'large'}
                                onClick={handleDisabled}
                                disabled={isDisabled}
                                text={isDisabled ? '無效' : '有效'}
                                key={index}
                            />
                        ))}
                    </div>
                    <div>
                        <h6
                            style={{
                                fontSize: '18px'
                            }}
                        >
                            Outlined Primary
                        </h6>
                        <Button
                            variant="outlined"
                            color="primary"
                            size="large"
                            onClick={handleDisabled}
                            disabled={isDisabled}
                            text={isDisabled ? '無效' : '有效'}
                        />
                        <Button
                            variant="outlined"
                            color="primary"
                            size="medium"
                            onClick={handleDisabled}
                            text={isDisabled ? '無效' : '有效'}
                        />
                        <Button
                            variant="outlined"
                            color="primary"
                            size="small"
                            onClick={handleDisabled}
                            text={isDisabled ? '無效' : '有效'}
                        />
                    </div>
                    <div>
                        <h6 style={{ fontSize: '18px' }}>Outlined Secondary</h6>
                        <Button
                            variant="outlined"
                            color="secondary"
                            size="large"
                            onClick={handleDisabled}
                            disabled={isDisabled}
                            text={isDisabled ? '無效' : '有效'}
                        />
                        <Button
                            variant="outlined"
                            color="secondary"
                            size="medium"
                            onClick={handleDisabled}
                            text={isDisabled ? '無效' : '有效'}
                        />
                        <Button
                            variant="outlined"
                            color="secondary"
                            size="small"
                            onClick={handleDisabled}
                            text={isDisabled ? '無效' : '有效'}
                        />
                    </div>
                    <div>
                        <h6 style={{ fontSize: '18px' }}>Outlined Success</h6>
                        {sizeAry.map((size, index) => (
                            <Button
                                variant="outlined"
                                color="success"
                                size={size as 'small' | 'medium' | 'large'}
                                onClick={handleDisabled}
                                disabled={isDisabled}
                                text={isDisabled ? '無效' : '有效'}
                                key={index}
                            />
                        ))}
                    </div>
                    <div>
                        <h6
                            style={{
                                fontSize: '18px'
                            }}
                        >
                            text Primary
                        </h6>
                        <Button
                            variant="text"
                            color="primary"
                            size="large"
                            onClick={handleDisabled}
                            disabled={isDisabled}
                            text={isDisabled ? '無效' : '有效'}
                        />
                        <Button
                            variant="text"
                            color="primary"
                            size="medium"
                            onClick={handleDisabled}
                            text={isDisabled ? '無效' : '有效'}
                        />
                        <Button
                            variant="text"
                            color="primary"
                            size="small"
                            onClick={handleDisabled}
                            text={isDisabled ? '無效' : '有效'}
                        />
                    </div>
                    <div>
                        <h6 style={{ fontSize: '18px' }}>text Secondary</h6>
                        <Button
                            variant="text"
                            color="secondary"
                            size="large"
                            onClick={handleDisabled}
                            disabled={isDisabled}
                            text={isDisabled ? '無效' : '有效'}
                        />
                        <Button
                            variant="text"
                            color="secondary"
                            size="medium"
                            onClick={handleDisabled}
                            text={isDisabled ? '無效' : '有效'}
                        />
                        <Button
                            variant="text"
                            color="secondary"
                            size="small"
                            onClick={handleDisabled}
                            text={isDisabled ? '無效' : '有效'}
                        />
                    </div>
                    <div>
                        <h6 style={{ fontSize: '18px' }}>text Success</h6>
                        {sizeAry.map((size, index) => (
                            <Button
                                variant="text"
                                color="success"
                                size={size as 'small' | 'medium' | 'large'}
                                onClick={handleDisabled}
                                disabled={isDisabled}
                                text={isDisabled ? '無效' : '有效'}
                                key={index}
                            />
                        ))}
                    </div>
                </section>

                <section
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '8px'
                    }}
                >
                    <h3 style={{ fontSize: '24px' }}>IconButton</h3>

                    <div>
                        <Button
                            color="primary"
                            text="定時"
                            variant="text"
                            startIcon={<AccessAlarmIcon />}
                        />
                        <Button
                            color="success"
                            text="新增"
                            variant="text"
                            startIcon={<AddCircleOutlineIcon />}
                        />
                    </div>
                    <div title={'built-in icon button section'}>
                        <Button color='success' variant='text' size='large' icon='Add'>人生重來鈕</Button>
                        <Button color='success' variant='text' size='medium' icon='Add'>人生重來鈕</Button>
                        <Button color='success' variant='text' size='small' icon='Add'>人生重來鈕</Button>
                    </div>
                </section>
                <section style={{ display: 'flex', gap: '8px' }}>
                    <h6 style={{ fontSize: '24px', margin: 0 }}>
                        Badge Section
                    </h6>
                    <label
                        style={{
                            backgroundColor: '#2b6cb0',
                            width: 'fit-content',
                            borderRadius: '6px'
                        }}
                    >
                        <Button
                            text="Badge"
                            variant="contained"
                            color="primary"
                            sx={{
                                boxShadow: 'none'
                            }}
                        ></Button>
                        <Badge
                            color="error"
                            badgeContent={1}
                            max={999}
                            startMargin={'1rem'}
                        ></Badge>
                    </label>

                    <label
                        style={{
                            backgroundColor: '#2b6cb0',
                            width: 'fit-content',
                            borderRadius: '6px',
                            paddingLeft: isUnRead ? '1rem' : 0
                        }}
                    >
                        {isUnRead && (
                            <Badge
                                variant="dot"
                                color="error"
                                badgeContent={1}
                                sx={{
                                    '& .MuiBadge-badge': {
                                        backgroundColor: 'white'
                                    }
                                }}
                            ></Badge>
                        )}
                        <Button
                            text={'badge 1'}
                            onClick={handleRead}
                            sx={{ boxShadow: 'none' }}
                        ></Button>
                    </label>

                    <Badge color="error" badgeContent={100} variant="standard">
                        <Button
                            text="Badge 2"
                            variant="contained"
                            color="primary"
                        />
                    </Badge>
                </section>
                {/* <section>
                    <h6 style={{ fontSize: '24px', margin: 0 }}>
                        DataGrid Section
                    </h6>
                    <AdvancedDataGrid
                        rows={rows}
                        columns={columns}
                        pageSizeOptions={[5, 10, 25]}
                        pagination
                    />
                </section> */}
            </ThemeProvider>
        </>
    )

}export default App
