-- AlterTable
ALTER TABLE "User" ALTER COLUMN "updateAt" SET DEFAULT CURRENT_TIMESTAMP;

-- CreateTable
CREATE TABLE "Product" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "desc" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "stock" INTEGER NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL,
    "UddataAt" TIMESTAMP(3) NOT NULL,
    "note" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ShopingCart" (
    "id" TEXT NOT NULL,
    "internalId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'PENDING',

    CONSTRAINT "ShopingCart_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ShopingCartProduct" (
    "id" TEXT NOT NULL,
    "cartId" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL DEFAULT 1,

    CONSTRAINT "ShopingCartProduct_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ShopingCart_userId_key" ON "ShopingCart"("userId");

-- AddForeignKey
ALTER TABLE "ShopingCart" ADD CONSTRAINT "ShopingCart_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ShopingCartProduct" ADD CONSTRAINT "ShopingCartProduct_cartId_fkey" FOREIGN KEY ("cartId") REFERENCES "ShopingCart"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ShopingCartProduct" ADD CONSTRAINT "ShopingCartProduct_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
