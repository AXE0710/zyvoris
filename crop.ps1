Add-Type -AssemblyName System.Drawing

$srcPath = "c:\code\global-fund-tax-infrastructure\public\mubashar.jpeg"
$dstPath = "c:\code\global-fund-tax-infrastructure\public\mubashar-cropped.jpg"

$src = [System.Drawing.Image]::FromFile($srcPath)
$w = $src.Width
$h = $src.Height

# High-impact close-up portrait focus (head & tie/collar)
$size = [int]($w * 0.32)
$x = [int](($w - $size) / 2) + [int]($w * 0.015)
$y = [int]($h * 0.165)

$cropRect = New-Object System.Drawing.Rectangle $x, $y, $size, $size
$bmp = New-Object System.Drawing.Bitmap 600, 600
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
$g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality

$destRect = New-Object System.Drawing.Rectangle 0, 0, 600, 600
$g.DrawImage($src, $destRect, $cropRect, [System.Drawing.GraphicsUnit]::Pixel)

$src.Dispose()
$g.Dispose()

$bmp.Save($dstPath, [System.Drawing.Imaging.ImageFormat]::Jpeg)
$bmp.Dispose()

Write-Host "Created close-up portrait successfully"
