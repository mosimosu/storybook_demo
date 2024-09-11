import {
    Badge as MuiBadge,
    BadgeProps as MuiBadgeProps,
    styled
} from '@mui/material'

interface BadgeProps extends MuiBadgeProps {
    startMargin?: string
    endMargin?: string
}

const StyledBadge = styled(
    ({ startMargin, endMargin, ...props }: BadgeProps) => {
        // Remove unused variables
        void { startMargin, endMargin }

        return <MuiBadge {...props} />
    }
)(({ children, badgeContent, startMargin, endMargin }) => ({
    '&.MuiBadge-root': { display: badgeContent ? 'inline-flex' : 'none' },
    '& .MuiBadge-badge': children
        ? {}
        : {
              position: 'static',
              transform: 'none',
              marginRight: startMargin || '0',
              marginLeft: endMargin || '0'
          }
}))

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
