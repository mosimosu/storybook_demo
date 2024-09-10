import { Badge as MuiBadge, BadgeProps as MuiBadgeProps } from '@mui/material'
import styled from 'styled-components'

interface BadgeProps extends MuiBadgeProps {
    startMargin?: string
    endMargin?: string
}

const StyledBadge = styled(MuiBadge)<BadgeProps>(
    ({ children, badgeContent, startMargin, endMargin }) => ({
        '&.MuiBadge-root': { display: badgeContent ? 'inline-flex' : 'none' },
        '& .MuiBadge-badge': children
            ? {}
            : {
                  position: 'static',
                  transform: 'none',
                  marginRight: endMargin ? startMargin : '0',
                  marginLeft: startMargin ? endMargin : '0'
              }
    })
)

const Badge = ({
    startMargin = '0',
    endMargin = '0',
    ...props
}: BadgeProps) => {
    return (
        <StyledBadge
            startMargin={startMargin}
            endMargin={endMargin}
            {...props}
        />
    )
}

export default Badge
