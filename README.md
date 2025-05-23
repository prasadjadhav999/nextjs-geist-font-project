# HOMESTAY.Network

An open-source travel accommodation platform built with Next.js, MongoDB, and TypeScript.

## Prerequisites

- Node.js 18.x or later
- MongoDB 6.0 or later
- AWS Account with necessary permissions
- Domain name (optional, but recommended)

## AWS Server Configuration

### 1. Launch EC2 Instance

1. Log in to AWS Console
2. Navigate to EC2 Dashboard
3. Launch a new instance with these specifications:
   - Ubuntu Server 22.04 LTS
   - t2.micro (free tier) or t2.small (recommended for production)
   - Configure Security Group:
     ```
     HTTP (80)          : 0.0.0.0/0
     HTTPS (443)        : 0.0.0.0/0
     SSH (22)           : Your IP
     Custom TCP (27017) : Your IP (for MongoDB)
     ```

### 2. Connect to Server

```bash
chmod 400 your-key.pem
ssh -i your-key.pem ubuntu@your-server-ip
```

### 3. Install Dependencies

```bash
# Update system
sudo apt update
sudo apt upgrade -y

# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs

# Install PM2 for process management
sudo npm install -g pm2

# Install Nginx
sudo apt install nginx -y

# Install MongoDB
wget -qO - https://www.mongodb.org/static/pgp/server-6.0.asc | sudo apt-key add -
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/6.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-6.0.list
sudo apt update
sudo apt install -y mongodb-org
```

### 4. Configure MongoDB

```bash
# Start MongoDB
sudo systemctl start mongod
sudo systemctl enable mongod

# Create database and user
mongosh
```

In the MongoDB shell:
```javascript
use homestay
db.createUser({
  user: "homestayuser",
  pwd: "your_secure_password",
  roles: ["readWrite"]
})
```

Edit MongoDB configuration:
```bash
sudo nano /etc/mongod.conf
```

Add/modify these lines:
```yaml
security:
  authorization: enabled

net:
  bindIp: 127.0.0.1
```

Restart MongoDB:
```bash
sudo systemctl restart mongod
```

### 5. Configure Environment Variables

Create .env.local file:
```bash
nano .env.local
```

Add these variables:
```
MONGODB_URI=mongodb://homestayuser:your_secure_password@localhost:27017/homestay
NEXTAUTH_SECRET=your-secret-key
NEXTAUTH_URL=https://your-domain.com
```

### 6. Deploy Application

```bash
# Clone repository
git clone https://github.com/your-username/homestay-network.git
cd homestay-network



# Install dependencies
npm install

# Build application
npm run build

# Start with PM2
pm2 start npm --name "homestay" -- start
pm2 startup
pm2 save
```

### 7. Configure Nginx

Create Nginx configuration:
```bash
sudo nano /etc/nginx/sites-available/homestay
```

Add this configuration:
```nginx
server {
    listen 80;
    server_name your-domain.com www.your-domain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Enable the site:
```bash
sudo ln -s /etc/nginx/sites-available/homestay /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

### 8. SSL Configuration (Optional)

```bash
# Install Certbot
sudo apt install certbot python3-certbot-nginx -y

# Get SSL certificate
sudo certbot --nginx -d your-domain.com -d www.your-domain.com
```

## MongoDB Backup and Maintenance

### Regular Backups

Create backup script:
```bash
nano backup-mongo.sh
```

Add this content:
```bash
#!/bin/bash
BACKUP_DIR="/home/ubuntu/mongodb-backups"
TIMESTAMP=$(date +%Y%m%d_%H%M%S)
mkdir -p $BACKUP_DIR
mongodump --db homestay --out $BACKUP_DIR/$TIMESTAMP
```

Make it executable:
```bash
chmod +x backup-mongo.sh
```

Add to crontab for daily backups:
```bash
crontab -e
# Add this line:
0 0 * * * /home/ubuntu/backup-mongo.sh
```

### Monitoring

Set up MongoDB monitoring:
```bash
# Install MongoDB Compass on your local machine
# Connect using:
mongodb://homestayuser:your_secure_password@your-server-ip:27017/homestay
```

## Troubleshooting

1. Check MongoDB status:
```bash
sudo systemctl status mongod
```

2. Check application logs:
```bash
pm2 logs homestay
```

3. Check Nginx logs:
```bash
sudo tail -f /var/log/nginx/error.log
```

4. Common MongoDB connection issues:
   - Check if MongoDB is running
   - Verify credentials in .env.local
   - Check security group settings
   - Verify MongoDB configuration

## Security Best Practices

1. Keep system updated:
```bash
sudo apt update && sudo apt upgrade -y
```

2. Enable firewall:
```bash
sudo ufw enable
sudo ufw allow ssh
sudo ufw allow http
sudo ufw allow https
```

3. Regular security updates:
```bash
sudo apt install unattended-upgrades
sudo dpkg-reconfigure -plow unattended-upgrades
```

## Support

For issues and support:
- Create an issue in the GitHub repository
- Contact support@homestay.network
- Join our Discord community

## License

This project is open-source under the MIT license.
